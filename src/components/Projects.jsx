import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace('#', '');
    if (!id) return;
    const t = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    return () => cancelAnimationFrame(t);
  }, [location.pathname, location.hash]);

  return (
    <section
      id="projects"
      className="flex min-h-screen min-h-[100svh] w-full flex-col bg-white px-4 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center -translate-y-6 sm:-translate-y-10 md:-translate-y-14">
        <motion.h1
          className="mb-8 text-center font-heading text-5xl leading-[0.92] tracking-[-0.02em] text-text-dark sm:mb-12 sm:text-6xl md:mb-14 md:text-8xl lg:mb-16 lg:text-9xl xl:text-[10rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>

        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="flex min-h-[200px] scroll-mt-28 flex-col items-center justify-center rounded-sm bg-[#D9D9D9] px-6 py-10 text-center sm:min-h-[220px] md:aspect-[16/10] md:min-h-0 md:py-8"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.label}
                  className="max-h-[70%] max-w-[85%] object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="font-body text-lg leading-snug text-text-dark/90 sm:text-xl">
                  {project.label}
                </span>
              )}
              {project.shortDescription ? (
                <p className="mt-4 max-w-[24rem] font-body text-sm leading-relaxed text-text-dark/80">
                  {project.shortDescription}
                </p>
              ) : null}
              {project.memberSectionId ? (
                <Link
                  to={`/members#${project.memberSectionId}`}
                  className="mt-3 font-body text-sm text-text-dark/75 underline-offset-2 transition-colors hover:text-accent hover:underline"
                >
                  팀 멤버 보기 →
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
