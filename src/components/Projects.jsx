import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Layers,
  Lightbulb,
  Mail,
  Sparkles,
  Target,
  Users
} from 'lucide-react';
import { projects } from '../data/projects';
import { publicAsset } from '../utils/publicAsset';

const sectionIntro = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

const IconBadge = ({ icon: Icon, accent }) => (
  <span
    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-text-dark/10 bg-white"
    style={{ color: accent }}
    aria-hidden="true"
  >
    <Icon size={20} />
  </span>
);

const ProjectLogo = ({ project }) => {
  if (project.logo) {
    return (
      <img
        src={publicAsset(project.logo)}
        alt={`${project.name} logo`}
        className="h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-[0.45rem] px-5 text-center font-heading text-4xl text-white sm:text-5xl"
      style={{ backgroundColor: project.accent }}
    >
      {project.name}
    </div>
  );
};

const PitchDeckGallery = ({ project }) => {
  if (!project.pitchDeck?.slides?.length) return null;

  return (
    <section className="mt-16">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-body text-sm uppercase tracking-[0.16em] text-text-dark/45">Canva Pitch</p>
          <h3 className="mt-2 font-heading text-4xl text-text-dark">Pitch Deck</h3>
        </div>
        <a
          href={project.pitchDeck.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-text-dark/15 px-4 py-2.5 font-body text-sm text-text-dark transition-colors hover:border-accent hover:text-accent"
        >
          Canva에서 보기
          <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="overflow-hidden rounded-[0.5rem] border border-text-dark/10 bg-white shadow-sm">
          <img
            src={publicAsset(project.pitchDeck.slides[0])}
            alt={`${project.name} pitch deck slide 1`}
            className="aspect-video h-auto w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="grid max-h-[28rem] grid-cols-2 gap-3 overflow-y-auto pr-1">
          {project.pitchDeck.slides.slice(1).map((slide, index) => (
            <a
              key={slide}
              href={publicAsset(slide)}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-[0.45rem] border border-text-dark/10 bg-white shadow-sm"
              aria-label={`${project.name} pitch deck slide ${index + 2}`}
            >
              <img
                src={publicAsset(slide)}
                alt={`${project.name} pitch deck slide ${index + 2}`}
                className="aspect-video h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectSection = ({ project, index }) => {
  const isAlt = index % 2 === 1;

  return (
    <motion.article
      id={project.id}
      className={`scroll-mt-28 py-16 sm:py-20 lg:py-24 ${isAlt ? 'bg-[#F7F5F0]' : 'bg-white'}`}
      variants={sectionIntro}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <p className="mb-3 font-body text-sm uppercase tracking-[0.18em] text-text-dark/55">
              {project.eyebrow}
            </p>
            <h2 className="font-heading text-5xl leading-[0.95] text-text-dark sm:text-6xl lg:text-7xl">
              {project.name}
            </h2>
            <p className="mt-5 max-w-2xl font-heading text-2xl leading-tight text-text-dark sm:text-3xl">
              {project.tagline}
            </p>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-text-dark/80 sm:text-lg">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={`/members#${project.memberSectionId}`}
                className="inline-flex items-center gap-2 rounded-md bg-text-dark px-5 py-3 font-body text-sm text-white transition-colors hover:bg-accent"
              >
                팀 멤버 보기
                <ArrowRight size={16} />
              </Link>
              <a
                href={`#${project.id}-contact`}
                className="inline-flex items-center gap-2 rounded-md border border-text-dark/20 px-5 py-3 font-body text-sm text-text-dark transition-colors hover:border-accent hover:text-accent"
              >
                Contact
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[0.5rem] border border-text-dark/10 bg-white p-8 shadow-sm sm:min-h-[340px] sm:p-10">
            <div
              className="absolute right-[-6rem] top-[-6rem] h-56 w-56 rounded-full opacity-20"
              style={{ backgroundColor: project.accent }}
              aria-hidden="true"
            />
            <div className="relative mx-auto flex h-52 max-w-[34rem] items-center justify-center sm:h-64">
              <ProjectLogo project={project} />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {project.team.map((member) => (
            <div key={member.email} className="rounded-[0.5rem] border border-text-dark/10 bg-white p-5 shadow-sm">
              <p className="font-heading text-xl leading-tight text-text-dark">{member.name}</p>
              <p className="mt-2 font-body text-sm text-text-dark/65">{member.role}</p>
            </div>
          ))}
        </div>

        <PitchDeckGallery project={project} />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <section className="rounded-[0.5rem] border border-text-dark/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <IconBadge icon={Target} accent={project.accent} />
              <h3 className="font-heading text-3xl text-text-dark">Problem</h3>
            </div>
            <ul className="space-y-4 font-body text-sm leading-relaxed text-text-dark/82 sm:text-base">
              {project.problem.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: project.accent }} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[0.5rem] border border-text-dark/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <IconBadge icon={Lightbulb} accent={project.accent} />
              <h3 className="font-heading text-3xl text-text-dark">Our Solution</h3>
            </div>
            <p className="font-body text-sm leading-relaxed text-text-dark/82 sm:text-base">
              {project.solution}
            </p>
          </section>
        </div>

        <section className="mt-16">
          <div className="mb-7 flex items-center gap-3">
            <IconBadge icon={Sparkles} accent={project.accent} />
            <h3 className="font-heading text-4xl text-text-dark">Core Features</h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {project.features.map((feature) => (
              <div key={feature.title} className="rounded-[0.5rem] border border-text-dark/10 bg-white p-5 shadow-sm">
                <p className="font-heading text-2xl leading-tight text-text-dark">{feature.title}</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-text-dark/72">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[0.5rem] border border-text-dark/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <IconBadge icon={CheckCircle2} accent={project.accent} />
              <h3 className="font-heading text-3xl text-text-dark">Project Outcome</h3>
            </div>
            <ul className="space-y-3 font-body text-sm leading-relaxed text-text-dark/82 sm:text-base">
              {project.outcome.map((line) => (
                <li key={line} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0" size={17} style={{ color: project.accent }} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[0.5rem] border border-text-dark/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <IconBadge icon={Layers} accent={project.accent} />
              <h3 className="font-heading text-3xl text-text-dark">Development Process</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.process.map((phase) => (
                <div key={`${phase.step}-${phase.title}`} className="border-l-2 pl-4" style={{ borderColor: project.accent }}>
                  <p className="font-body text-xs uppercase tracking-[0.12em] text-text-dark/45">{phase.step}</p>
                  <p className="mt-1 font-heading text-xl leading-tight text-text-dark">{phase.title}</p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-text-dark/70">{phase.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[0.5rem] border border-text-dark/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <IconBadge icon={BarChart3} accent={project.accent} />
              <h3 className="font-heading text-3xl text-text-dark">Future Plans</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.future.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-text-dark/10 bg-white px-4 py-2 font-body text-sm text-text-dark/78"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[0.5rem] border border-text-dark/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <IconBadge icon={Cpu} accent={project.accent} />
              <h3 className="font-heading text-3xl text-text-dark">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-md px-3 py-2 font-body text-sm text-text-dark"
                  style={{ backgroundColor: `${project.accent}33` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id={`${project.id}-contact`} className="mt-16 scroll-mt-28">
          <div className="mb-7 flex items-center gap-3">
            <IconBadge icon={Users} accent={project.accent} />
            <h3 className="font-heading text-4xl text-text-dark">Contact Us</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {project.team.map((member) => (
              <a
                key={member.email}
                href={`mailto:${member.email}`}
                className="rounded-[0.5rem] border border-text-dark/10 bg-white p-5 shadow-sm transition-colors hover:border-accent"
              >
                <p className="font-heading text-xl text-text-dark">{member.name}</p>
                <p className="mt-1 font-body text-sm text-text-dark/55">{member.role}</p>
                <p className="mt-3 break-all font-body text-sm text-text-dark/75">{member.email}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </motion.article>
  );
};

const Projects = () => {
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
    <main id="projects" className="min-h-screen min-h-[100svh] bg-white pt-24">
      <section className="bg-white px-4 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10 lg:px-12">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-center font-body text-sm uppercase tracking-[0.2em] text-text-dark/55">
            2025-2026 OZ Lab
          </p>
          <h1 className="text-center font-heading text-6xl leading-[0.9] text-text-dark sm:text-7xl md:text-8xl lg:text-[8rem]">
            Projects
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-center font-body text-base leading-relaxed text-text-dark/72 sm:text-lg">
            팀별 Canva pitch deck 내용을 웹 페이지로 옮긴 프로젝트 쇼케이스입니다.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="inline-flex items-center gap-2 rounded-md border border-text-dark/15 px-5 py-3 font-body text-sm text-text-dark transition-colors hover:border-accent hover:text-accent"
              >
                {project.name}
                <ArrowRight size={16} />
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {projects.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}
    </main>
  );
};

export default Projects;
