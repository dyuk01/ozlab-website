/**
 * Project pitch content adapted from the teams' Canva decks.
 */
export const projects = [
  {
    id: 'fluention',
    name: 'Fluention',
    eyebrow: 'OZ Project',
    tagline: 'Keep your speech flowing with Fluention.',
    summary:
      'An AI-powered speech training platform that helps users build fluency and confidence through guided repetition and data-driven feedback.',
    accent: '#F6DF45',
    dark: '#17213A',
    logo: '/assets/logo/fluention-logo.png',
    pitchDeck: {
      sourceUrl: 'https://www.canva.com/design/DAHFWpChJ-M/45cWRg2xBiYhEuHcViliHg/edit',
      slides: Array.from({ length: 14 }, (_, i) => `/assets/projects/fluention/slides/slide-${String(i + 1).padStart(2, '0')}.png`)
    },
    memberSectionId: 'proj-fluention',
    team: [
      { name: 'Injae Choi', role: 'Business', email: 'injae.choi.990604@gmail.com' },
      { name: 'Minji Seo', role: 'Business / Frontend', email: 'allyseo0621@gmail.com' },
      { name: 'Heewon Kim', role: 'Backend', email: 'gmldnjskim@gmail.com' },
      { name: 'Sophia Cho', role: 'AI Development', email: 'hjc.purdue@gmail.com' },
      { name: 'Jungyoun Lee', role: 'AI Development', email: 'noveau20@gmail.com' }
    ],
    problem: [
      'Speech therapy is expensive and inaccessible, often costing $100-$250 per session.',
      'People who stutter often know exactly what they want to say, but struggle to say it smoothly in everyday life.',
      'Existing tools do not offer structured, stuttering-focused self-practice.',
      'Fear of judgment and speaking anxiety make consistent practice difficult.'
    ],
    solution:
      'Fluention provides a private speaking environment where users can follow guided scripts, practice through repetition, receive clear AI-based feedback, and build confidence through consistent improvement.',
    features: [
      {
        title: 'Speak N Speech',
        body:
          'A guided practice module where users choose pre-built or custom scripts, record and replay speech, and repeat the same script to improve.'
      },
      {
        title: 'Word-Level Feedback',
        body:
          'Detects stutters, repetitions, omissions, and accuracy issues so users can understand exactly where and how to improve.'
      },
      {
        title: 'Trend Analysis',
        body:
          'Tracks progress over time so improvement is visible through patterns, not only felt subjectively.'
      },
      {
        title: 'Custom Scripts',
        body:
          'Lets users practice presentations, elevator pitches, or conversation starters with personalized analysis.'
      }
    ],
    outcome: [
      'Built the core Speak N Speech practice module.',
      'Enabled users to choose scripts, record speech, and replay sessions.',
      'Provided AI-based feedback on accuracy, omissions, and disfluency.',
      'Created a guided self-practice experience for people who stutter.',
      'Built a foundation for future growth and personalization.'
    ],
    process: [
      {
        step: 'Step 1',
        title: 'Problem Discovery',
        body: 'Identified barriers including anxiety, cost, lack of tools, and the core need for private speaking practice.'
      },
      {
        step: 'Step 2',
        title: 'MVP Design',
        body: 'Designed the guided speaking experience and structured the feedback-based practice flow.'
      },
      {
        step: 'Step 3',
        title: 'Development',
        body: 'Built the record-to-text-to-feedback pipeline with Whisper, WER logic, ElevenLabs, and Supabase.'
      },
      {
        step: 'Step 4',
        title: 'Testing & Refinement',
        body: 'Tested the repeatable learning loop, improved feedback accuracy, refined UX, and planned Mind N Mend.'
      }
    ],
    future: [
      'Advanced phoneme-level speech analysis',
      'More precise fluency and accuracy feedback',
      'Mind N Mend anxiety reduction tools',
      'Progress-based recommendations and role-play simulations',
      'B2B expansion for schools and clinics'
    ],
    tech: ['React / Next.js', 'TypeScript', 'Python', 'CrisperWhisper ASR', 'Supabase', 'Modal', 'Vercel']
  },
  {
    id: 'brandsage',
    name: 'Brandsage',
    eyebrow: 'OZ Lab Project',
    tagline: 'Turn YouTube conversations into consumer insight.',
    summary:
      'An AI-powered B2B SaaS platform that analyzes YouTube content activity and turns unstructured social data into actionable consumer insights for SMEs.',
    accent: '#C85A5A',
    dark: '#2E2E34',
    pitchDeck: {
      sourceUrl: 'https://www.canva.com/design/DAHEwJJGla0/oRWIPzev1jpUiqOYzhI5Zg/edit?ui=eyJEIjp7IlAiOnsiQiI6ZmFsc2V9fX0',
      slides: Array.from({ length: 12 }, (_, i) => `/assets/projects/brandsage/slides/slide-${String(i + 1).padStart(2, '0')}.png`)
    },
    memberSectionId: 'proj-brandsage',
    team: [
      { name: 'Seonmin Yoon', role: 'Team Leader / Business', email: 'rhombic02@gmail.com' },
      { name: 'Dongseok Kim', role: 'Business Team', email: 'rlads1324@gmail.com' },
      { name: 'Yechan Choi', role: 'AI Developer', email: 'ycc030207@gmail.com' },
      { name: 'Gunwoo Kang', role: 'Frontend Developer', email: 'gkang901@gmail.com' },
      { name: 'Bohyeon Jang', role: 'Backend Developer', email: 'bhj37193@gmail.com' }
    ],
    problem: [
      'Valuable consumer insights exist in YouTube comments and influencer discussions.',
      'The data is unstructured and difficult to analyze manually.',
      'SMEs often lack the resources and tools to convert social discussion into actionable strategy.'
    ],
    solution:
      'Brandsage uses AI to analyze YouTube content and comments at scale, identifying sentiment, recurring themes, and key consumer concerns in summaries that brands can quickly understand and use.',
    features: [
      {
        title: 'Sentiment Metrics',
        body:
          'Tracks overall, influencer, and viewer sentiment from video content and comments, with time-series trend graphs.'
      },
      {
        title: 'Keyword Cloud',
        body:
          'Surfaces the most impactful product characteristics from videos and comments so teams can spot recurring themes quickly.'
      },
      {
        title: 'Impactful Reviews',
        body:
          'Highlights direct quotations from comments and videos that clearly convey consumer sentiment.'
      },
      {
        title: 'Influencer Ranking',
        body:
          'Ranks creators who reviewed or mentioned a product using engagement-derived metrics.'
      }
    ],
    outcome: [
      'Reached the MVP stage.',
      'Processes content 90-95% faster than average video play time.',
      'Supports product tracking, sentiment metrics, keyword cloud, impactful reviews, and influencer ranking.',
      'Demonstrates strong operational efficiency for B2B insight workflows.'
    ],
    process: [
      {
        step: 'Sep-Oct 2025',
        title: 'Market Research & Project Design',
        body: 'Researched the market landscape, defined core features, drafted PRD, KPIs, pricing model, and MVP scope.'
      },
      {
        step: 'Nov-Dec 2025',
        title: 'MVP Creation',
        body: 'Built the data pipeline, implemented code, and created a feedback simulation plan.'
      },
      {
        step: 'Dec 2025-Jan 2026',
        title: 'MVP Testing & Marketing Strategy',
        body: 'Ran internal feedback simulations, stability tests, and B2B marketing strategy work.'
      },
      {
        step: 'Feb-Apr 2026',
        title: 'Optimization & Demo',
        body: 'Continued debugging, polished UI/UX, documented the product, and prepared the final demo.'
      }
    ],
    future: [
      'Multi-language support for both videos and dashboard',
      'Bot detection for comment analysis',
      'Further debugging and system stability work',
      'Landing page and documentation polish'
    ],
    tech: ['Next.js', 'Express.js', 'Supabase']
  }
];
