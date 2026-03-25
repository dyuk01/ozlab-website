import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { memberSections } from '../data/members';

const MemberCard = ({ member }) => {
  const hasRole = member.role?.trim();
  const hasName = member.name?.trim();
  const hasMajor = member.major?.trim();
  const emails = member.emails?.filter(Boolean) ?? [];

  return (
    <article className="flex flex-row gap-4 sm:gap-5 items-start text-left">
      <div className="relative w-[88px] sm:w-[100px] shrink-0 aspect-[3/4] bg-[#e8e8e8] rounded-[2px] overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={hasName || hasRole ? `${member.name || ''} ${member.role || ''}`.trim() : 'Member'}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        ) : null}
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
