import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { memberSections } from '../data/members';
import { publicAsset } from '../utils/publicAsset';

const FALLBACK_MEMBER_IMAGE = publicAsset('assets/members/placeholder.webp');

const LinkedInMark = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className}>
    <path
      fill="currentColor"
      d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 9.61H5.95V17H8.34V9.61ZM7.14 5.78A1.38 1.38 0 1 0 7.14 8.53A1.38 1.38 0 0 0 7.14 5.78ZM18.05 12.74C18.05 10.54 16.88 9.5 15.33 9.5C14.08 9.5 13.52 10.18 13.2 10.67V9.61H10.81C10.84 10.31 10.81 17 10.81 17H13.2V12.87C13.2 12.65 13.21 12.43 13.28 12.27C13.45 11.83 13.83 11.36 14.47 11.36C15.31 11.36 15.64 11.99 15.64 12.92V17H18.03V12.74H18.05Z"
    />
  </svg>
);

const MemberCard = ({ member }) => {
  const hasRole = member.role?.trim();
  const hasName = member.name?.trim();
  const hasMajor = member.major?.trim();
  const hasLinkedin = member.linkedin?.trim();
  const emails = member.emails?.filter(Boolean) ?? [];
  const imageSrc = member.image ? publicAsset(member.image) : FALLBACK_MEMBER_IMAGE;

  return (
    <article className="flex flex-row gap-4 sm:gap-5 items-start text-left">
      <div className="group relative w-[88px] sm:w-[100px] shrink-0 aspect-[3/4] bg-[#e8e8e8] rounded-[2px] overflow-hidden">
        <img
          src={imageSrc}
          alt={hasName || hasRole ? `${member.name || ''} ${member.role || ''}`.trim() : 'Member'}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            if (e.currentTarget.src !== FALLBACK_MEMBER_IMAGE) {
              e.currentTarget.src = FALLBACK_MEMBER_IMAGE;
            }
          }}
        />
        {hasLinkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name || 'Member'} LinkedIn`}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#0A66C2]">
              <LinkedInMark className="h-6 w-6" />
            </span>
          </a>
        ) : (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-text-dark/55">
              <LinkedInMark className="h-6 w-6" />
            </span>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5 pt-0.5 font-body text-text-dark">
        {hasRole && hasName && (
          <p className="text-[0.8125rem] sm:text-sm leading-snug text-text-dark/80">{member.role}</p>
        )}
        {hasRole && !hasName && (
          <p className="text-[0.9375rem] sm:text-base font-semibold leading-snug text-text-dark">{member.role}</p>
        )}
        {hasName && (
          <p className="text-[0.9375rem] sm:text-base font-semibold leading-snug text-text-dark">{member.name}</p>
        )}
        {hasMajor && (
          <p className="text-[0.8125rem] sm:text-sm leading-snug text-text-dark/85">{member.major}</p>
        )}
        {emails.length > 0 && (
          <div className="mt-1 flex flex-col gap-0.5">
            {emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="text-[0.8125rem] sm:text-sm text-text-dark/75 break-all underline-offset-2 hover:text-accent hover:underline"
              >
                {email}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const Team = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace('#', '');
    if (!id) return;
    const t = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(t);
  }, [location.pathname, location.hash]);

  return (
    <section id="members" className="bg-white px-4 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-14 text-center font-heading text-5xl text-text-dark sm:mb-16 sm:text-6xl md:mb-20 md:text-7xl">
          Meet the Team
        </h1>

        {memberSections.map((section) => (
          <div key={section.id} id={section.id} className="mb-16 scroll-mt-28 md:mb-24 last:mb-0">
            <h2 className="mb-9 text-center font-heading text-2xl text-text-dark sm:mb-10 sm:text-3xl md:mb-12">
              {section.title}
            </h2>
            {section.intro ? (
              <p className="mx-auto mb-3 max-w-3xl text-center font-body text-sm leading-relaxed text-text-dark/85 sm:text-base">
                {section.intro}
              </p>
            ) : null}
            {section.description?.length ? (
              <div className="mx-auto mb-10 max-w-3xl space-y-2 text-center font-body text-sm leading-relaxed text-text-dark/75 sm:text-base">
                {section.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ) : null}
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-3 lg:gap-y-14">
              {section.members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
