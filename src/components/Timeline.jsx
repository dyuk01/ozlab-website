import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';

/** 위를 가리키는 filled 삼각형 — 중앙 세로선(`accent`)과 동일 색 */
const TimelineArrowUp = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 28 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M14 3 L26 22 L2 22 Z" fill="currentColor" />
  </svg>
);

const Timeline = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 }
  };

  const ordered = [...achievements].sort((a, b) => a.order - b.order);

  return (
    <section id="achievements" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#c8b7de]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] text-black text-center mb-20 md:mb-28 lg:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <motion.div
          className="relative pb-24 md:pb-28"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* 모바일: 2026(위) → 화살표 → 세로선, 하단 2025 */}
          <div
            className="md:hidden absolute left-14 top-0 font-heading text-4xl sm:text-5xl text-black select-none pointer-events-none z-[1]"
            aria-hidden
          >
            2026
          </div>
          <TimelineArrowUp className="pointer-events-none absolute left-[33px] top-11 z-10 h-6 w-8 -translate-x-1/2 text-accent md:hidden" />
          <div className="md:hidden absolute left-[33px] top-[4.25rem] bottom-12 w-1.5 -translate-x-1/2 rounded-full bg-accent" />
          <div
            className="md:hidden absolute left-14 bottom-12 font-heading text-4xl sm:text-5xl text-black select-none pointer-events-none z-[1]"
            aria-hidden
          >
            2025
          </div>

          {/* 데스크톱: 2026(위) → 화살표(타임라인 꼭대기) → 세로선, 하단 2025 */}
          <div
            className="hidden md:block absolute left-[calc(50%+1.25rem)] top-0 font-heading text-6xl lg:text-7xl text-black select-none pointer-events-none z-[1]"
            aria-hidden
          >
            2026
          </div>
          <TimelineArrowUp className="pointer-events-none absolute left-1/2 top-16 z-10 hidden h-8 w-10 -translate-x-1/2 text-accent md:block" />
          <div className="hidden md:block absolute left-1/2 top-[5.5rem] bottom-0 z-0 w-1.5 -translate-x-1/2 rounded-full bg-accent pointer-events-none" />
          <div
            className="hidden md:block absolute left-[calc(50%+1.25rem)] bottom-0 font-heading text-6xl lg:text-7xl text-black select-none pointer-events-none z-[1]"
            aria-hidden
          >
            2025
          </div>

          <div className="space-y-12 pt-24 md:pt-28">
            {ordered.map((achievement, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={achievement.id}
                  variants={item}
                  className="relative pl-20 md:pl-0 md:flex md:items-center md:gap-8"
                >
                  <div className="absolute left-[33px] z-10 h-5 w-5 -translate-x-1/2 rounded-full bg-accent shadow-sm ring-2 ring-[#c8b7de] md:left-1/2" />

                  <div
                    className={`md:w-1/2 ${
                      isLeft ? 'md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="min-w-0 break-words bg-bg-secondary p-6 sm:p-7 md:p-8 rounded-lg shadow-lg text-left">
                      <div className="flex flex-wrap items-center gap-3 mb-3 justify-start">
                        <span className="font-heading text-4xl md:text-5xl text-accent">{achievement.dateLabel}</span>
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl text-text-dark mb-3 leading-snug">
                        {achievement.title}
                      </h3>
                      <p className="font-body text-base md:text-lg text-text-dark/80 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
