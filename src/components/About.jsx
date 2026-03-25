import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('studies');

  const tabContent = {
    studies: {
      title: 'Studies',
      paragraphs: [
        'OZ 스터디는 매 학기 주제별로 팀을 구성해 함께 학습합니다. 멋쟁이사자처럼과 Purdue University가 공동 주최하는 프로그램으로, 기초부터 실전까지 단계적으로 다룹니다.',
        '스터디 트랙은 아래와 같으며, 각 트랙은 매주 세션과 과제를 통해 성장합니다. 실력을 쌓고 동기를 얻는 시간이 될 거예요.'
      ],
      tracks: ['Backend', 'Frontend', 'AI', 'UI/UX', '코딩테스트 준비'],
      cta: { label: '스터디팀 자세히 알아보기 →', href: '#' }
    },
    projects: {
      title: 'Projects',
      blocks: [
        {
          type: 'p',
          text: '오즈에서는 매년 두 개의 장기 프로젝트 팀을 운영하며, 각 팀은 1년 동안 실제 서비스를 만드는 것을 목표로 협업합니다.'
        },
        {
          type: 'p',
          text: '각 프로젝트 팀은 다음과 같은 구성으로 이루어집니다:'
        },
        { type: 'ul', items: ['Frontend 1명', 'Backend 1명', 'AI 1명', 'Business 2명'] },
        {
          type: 'p',
          text: '총 5명으로 구성된 소규모 팀 단위로 집중적인 협업을 진행합니다.'
        },
        { type: 'p', text: '현재 진행 중인 프로젝트:' },
        { type: 'ul', items: ['Fluention', 'Brandsage'] },
        {
          type: 'p',
          text: '각 팀은 역할 기반 협업을 통해 실제 서비스 기획부터 개발, 실행까지 전 과정을 경험하게 됩니다.'
        }
      ],
      cta: { label: '프로젝트팀 자세히 알아보기 →', href: '/projects' }
    },
    achievements: {
      title: 'Achievements',
      blocks: [
        {
          type: 'p',
          text: '오즈는 2025년도 가을학기에 멋쟁이사자처럼이 주최한 전국 규모 아이디어톤에 참가하여 우수한 성과를 거두었습니다.'
        },
        { type: 'p', text: '미국 전역 여러 대학교가 참여한 가운데' },
        {
          type: 'ul',
          items: [
            '오즈 소속 3개 팀이 본선에 진출',
            '본선 무대에서 프로젝트 발표 진행',
            '그중 1개 팀이 최종 우승'
          ]
        },
        { type: 'p', text: '이라는 성과를 달성했습니다.' }
      ],
      cta: { label: '활동 자세히 알아보기 →', href: '/achievements' }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  const tabIds = ['studies', 'projects', 'achievements'];

  return (
    <section
      id="about"
      className="relative px-0 pb-20 md:pb-32 pt-20 md:pt-32 bg-white rounded-t-3xl md:rounded-t-[3rem] shadow-xl z-10"
    >
      <div className="w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* 한 블록으로 묶음: overflow-hidden 제거 → floating 시 상단 잘림 방지 */}
          <motion.div variants={item} className="relative -mt-[4.5rem] md:-mt-24 mb-16 w-full overflow-x-hidden pt-0 pb-12 md:pb-24">
            {/* Mobile: single column — no fixed pixel widths */}
            <div className="flex min-h-0 flex-col gap-8 px-4 pt-6 md:hidden">
              <h2 className="font-heading text-4xl text-text-dark sm:text-5xl">What is OZ?</h2>

              <motion.div
                className="mx-auto flex h-44 w-full max-w-md items-center justify-center rounded-[1.65rem] border border-[#c8b7de] bg-bg-primary/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="font-body text-3xl text-text-dark/90 sm:text-4xl">사진1</span>
              </motion.div>

              <div className="w-full max-w-lg mx-auto rounded-[1.65rem] border border-[#c8b7de] bg-white px-6 py-10 sm:px-8 sm:py-12">
                <p className="font-heading text-xl sm:text-2xl leading-tight text-text-dark mb-4">
                  Build Together. Grow Together.
                </p>
                <p className="font-body text-base sm:text-lg leading-relaxed text-text-dark/95">
                  아이디어를 실제 서비스로 만들고 함께 배우며 성장하는 한인 창업, 개발 동아리
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <motion.div
                  className="flex h-40 items-center justify-center rounded-[1.65rem] border border-[#c8b7de] bg-bg-primary/30 sm:col-span-1 sm:h-44"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                >
                  <span className="font-body text-2xl text-text-dark/90 sm:text-3xl">사진2</span>
                </motion.div>
                <motion.div
                  className="flex h-40 items-center justify-center rounded-[1.65rem] border border-[#c8b7de] bg-bg-primary/30 sm:h-44"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                >
                  <span className="font-body text-2xl text-text-dark/90 sm:text-3xl">사진3</span>
                </motion.div>
              </div>

              <button
                type="button"
                className="w-full max-w-lg mx-auto rounded-2xl bg-[#c8b7de] px-6 py-4 text-center font-body text-base sm:text-lg text-text-dark shadow-md hover:bg-[#b8a3d8] transition-colors"
              >
                오즈에 대해 자세히 알아보기 →
              </button>
            </div>

            {/* Desktop: original absolute layout */}
            <div className="relative hidden min-h-[100svh] md:block overflow-visible pb-24">
              <div className="absolute -left-[4%] top-[10%] h-56 w-[min(760px,92vw)] max-w-[760px] rounded-[1.65rem] border border-[#c8b7de] bg-transparent z-10" />

              <motion.div
                className="absolute right-[11%] top-[5%] h-64 w-[min(470px,42vw)] max-w-[470px] rounded-[1.65rem] border border-[#c8b7de] bg-bg-primary/30 flex items-center justify-center z-20"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="font-body text-5xl text-text-dark/90">사진1</span>
              </motion.div>

              <h2 className="absolute left-[9%] top-[47%] -translate-y-1/2 font-heading text-6xl sm:text-7xl md:text-8xl text-text-dark z-40">
                What is OZ?
              </h2>

              <div className="absolute left-[50%] top-[50%] -translate-y-1/2 w-full max-w-[448px] rounded-[1.65rem] border border-[#c8b7de] bg-white px-8 py-14 sm:py-16 md:py-[4.5rem] z-10">
                <p className="font-heading text-[1.5rem] leading-tight text-text-dark mb-6">Build Together. Grow Together.</p>
                <p className="font-body text-[1.4rem] leading-relaxed text-text-dark/95">
                  아이디어를 실제 서비스로 만들고 함께 배우며 성장하는 한인 창업, 개발 동아리
                </p>
              </div>

              <motion.div
                className="absolute left-[-2%] bottom-[6%] h-64 w-[min(470px,48vw)] max-w-[470px] rounded-[1.65rem] border border-[#c8b7de] bg-bg-primary/30 flex items-center justify-center z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              >
                <span className="font-body text-5xl text-text-dark/90">사진2</span>
              </motion.div>
              <motion.div
                className="absolute right-[-2%] bottom-[8%] h-64 w-[min(470px,48vw)] max-w-[470px] rounded-[1.65rem] border border-[#c8b7de] bg-bg-primary/30 flex items-center justify-center z-30"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              >
                <span className="font-body text-5xl text-text-dark/90">사진3</span>
              </motion.div>

              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 bottom-14 rounded-2xl bg-[#c8b7de] px-11 py-5 text-center font-body text-[1.75rem] text-text-dark shadow-md hover:bg-[#b8a3d8] transition-colors"
              >
                오즈에 대해 자세히 알아보기 →
              </button>
            </div>
          </motion.div>

          <motion.section
            id="studies"
            variants={item}
            className="mt-4 flex min-h-0 flex-col bg-white px-4 pt-10 pb-16 sm:px-8 md:min-h-[100svh] lg:px-12 lg:pt-12"
          >
            <h3 className="font-heading text-5xl sm:text-6xl text-text-dark text-center mb-3">
              What we do?
            </h3>
            <p className="font-body text-sm text-text-dark/55 text-center mb-10">
              이전 연도들은 오른쪽 상단에서 확인할 수 있습니다.
            </p>

            {/* 탭만큼만 너비 사용 → 사이 빈칸 없음. 활성 탭 글자 커지면 layout으로 옆 탭 밀림 */}
            <div className="mb-10 flex w-max max-w-full flex-row flex-wrap items-end justify-center gap-x-6 sm:gap-x-8 gap-y-1 mx-auto px-2">
              {tabIds.map((tab) => (
                <motion.div
                  key={tab}
                  layout
                  transition={{ type: 'spring', stiffness: 480, damping: 38 }}
                  className="shrink-0"
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`font-heading whitespace-nowrap transition-all duration-500 ease-out rounded-md ${
                      activeTab === tab
                        ? 'px-2 sm:px-3 text-[2rem] sm:text-[2.5rem] md:text-[3rem] text-[#c8b7de]'
                        : 'px-0 text-[1.125rem] sm:text-[1.3rem] md:text-[1.5rem] text-[#c8b7de]/45 hover:text-[#c8b7de]/70'
                    }`}
                  >
                    {tabContent[tab].title}
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="max-w-4xl w-full mx-auto flex-1 min-h-0 flex flex-col">
              <div className="bg-white border border-text-dark/12 rounded-[1.75rem] sm:rounded-[2rem] p-8 sm:p-10 shadow-sm flex-1 flex flex-col">
                {activeTab === 'studies' && (
                  <div className="flex flex-wrap items-center gap-5 sm:gap-8 mb-8">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-text-dark/10 bg-amber-50 font-body text-xs text-text-dark/60">
                      LOGO
                    </div>
                    <div className="flex h-12 min-w-[140px] items-center justify-center rounded-lg bg-[#ff6b35] px-4 font-body text-xs font-medium text-white">
                      멋쟁이사자처럼
                    </div>
                  </div>
                )}

                {tabContent[activeTab].blocks ? (
                  <div className="space-y-4 font-body text-text-dark/90 text-sm sm:text-base leading-relaxed text-left">
                    {tabContent[activeTab].blocks.map((block, i) => {
                      if (block.type === 'p') {
                        return <p key={i}>{block.text}</p>;
                      }
                      if (block.type === 'ul') {
                        return (
                          <ul
                            key={i}
                            className="list-disc space-y-2 pl-5 marker:text-text-dark/70"
                          >
                            {block.items.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        );
                      }
                      return null;
                    })}
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 font-body text-text-dark/90 text-sm sm:text-base leading-relaxed">
                      {tabContent[activeTab].paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {tabContent[activeTab].tracks && (
                      <ul className="mt-6 space-y-2 font-body text-text-dark/90 text-sm sm:text-base list-disc pl-5">
                        {tabContent[activeTab].tracks.map((track) => (
                          <li key={track}>{track}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                <div className="mt-auto flex justify-center pt-10 text-center border-t border-text-dark/10">
                  {tabContent[activeTab].cta.href.startsWith('/') ? (
                    <Link
                      to={tabContent[activeTab].cta.href}
                      className="font-body text-text-dark/75 hover:text-text-dark transition-colors inline-flex items-center justify-center gap-1 text-center"
                    >
                      {tabContent[activeTab].cta.label}
                    </Link>
                  ) : (
                    <a
                      href={tabContent[activeTab].cta.href}
                      className="font-body text-text-dark/75 hover:text-text-dark transition-colors inline-flex items-center justify-center gap-1 text-center"
                    >
                      {tabContent[activeTab].cta.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="join"
            variants={item}
            className="mt-20 px-4 sm:px-8 lg:px-12 pb-24 max-w-6xl mx-auto w-full"
          >
            <h3 className="font-heading text-5xl sm:text-6xl text-text-dark mb-10 text-left">
              How to Join?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 text-left">
              <div className="font-body text-text-dark/90 text-sm sm:text-base leading-relaxed">
                <p className="mb-8">
                  오즈는 매년 가을학기마다 새로운 멤버를 모집합니다.
                </p>
                <p className="font-medium text-text-dark mb-3">지원 대상:</p>
                <ul className="list-disc list-outside space-y-2 pl-5 marker:text-text-dark/70">
                  <li>성실하게 활동에 참여할 수 있는 분</li>
                  <li>열정을 가지고 함께 성장하고 싶은 분</li>
                  <li>1년 동안 꾸준히 참여 가능한 분</li>
                </ul>
              </div>

              <div className="font-body text-text-dark/90 text-sm sm:text-base leading-relaxed">
                <div className="mb-8">
                  <span className="inline-block font-heading text-lg sm:text-xl text-text-dark bg-[#c8b7de]/50 px-3 py-1.5 rounded-md">
                    Study Track
                  </span>
                  <ul className="mt-4 list-disc list-outside space-y-2 pl-5 marker:text-text-dark/70">
                    <li>전공과 관계없이 누구나 참여 가능</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <span className="inline-block font-heading text-lg sm:text-xl text-text-dark bg-[#c8b7de]/50 px-3 py-1.5 rounded-md">
                    Project Track
                  </span>
                  <ul className="mt-4 list-disc list-outside space-y-2 pl-5 marker:text-text-dark/70">
                    <li>3-4학년 우대</li>
                    <li>실제 서비스를 만들어보고 싶은 분께 추천</li>
                  </ul>
                </div>

                <p className="mb-8 text-text-dark/85">
                  모집 일정은 인스타그램에서 확인하세요
                </p>

                <div className="space-y-3 font-body text-text-dark">
                  <p>
                    OZ Instagram:{' '}
                    <a
                      href="https://www.instagram.com/oz.startup_lab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-text-dark hover:text-accent transition-colors"
                    >
                      @oz.startup_lab
                    </a>
                  </p>
                  <p>
                    Purdue Likelion Instagram:{' '}
                    <a
                      href="https://www.instagram.com/likelion_purdue/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-text-dark hover:text-accent transition-colors"
                    >
                      @likelion_purdue
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
