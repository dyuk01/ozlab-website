/**
 * 멤버 페이지 데이터
 * - 멤버 필드: role, name, major, emails, image(public 경로)
 */
const sharedProfiles = {
  choiYewon: {
    name: '최예원 (Amy Choi)',
    major: 'CGT (Computer Graphics)',
    emails: ['choi976@purdue.edu', 'readchoi0316@gmail.com'],
    linkedin: 'https://www.linkedin.com/in/choi-amyyyy',
    image: '/assets/members/study/fe/fe-0.webp'
  },
  limSeoyeon: {
    name: '임서연 (Stella Lim)',
    major: 'UX Design',
    emails: ['lim389@purdue.edu', 'seoyeonstellalim@gmail.com'],
    linkedin: 'https://www.linkedin.com/in/seoyeonstellalim/',
    image: '/assets/members/study/uiux/ux-0.webp'
  },
  joYoungjin: {
    name: '조영진 (Jamie Cho)',
    major: 'Computer Science',
    emails: ['cho434@purdue.edu', 'jamieyjcho@gmail.com'],
    linkedin: 'https://www.linkedin.com/in/jamieyjcho/',
    image: '/assets/members/study/ai/ai-0.webp'
  }
};

export const memberSections = [
  {
    id: 'executives',
    title: '임원진',
    members: [
      {
        id: 'ex-1',
        role: '회장',
        name: '민지인(Jin Min)',
        major: 'Data Science',
        emails: ['min100@purdue.edu', 'jiinmin04@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/jiin2004',
        image: '/assets/members/executive/ex-1.webp'
      },
      {
        id: 'ex-2',
        role: '부회장',
        name: '육도경(Peter Yuk)',
        major: 'Computer Science',
        emails: ['dyuk@purdue.edu', 'peteryk91@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/peter-yuk-a3aba3254/',
        image: '/assets/members/executive/ex-2.webp'
      },
      {
        id: 'ex-3',
        role: '스터디 팀장(Frontend)',
        ...sharedProfiles.choiYewon
      },
      {
        id: 'ex-4',
        role: '스터디 팀장(Backend)',
        name: '박준형',
        major: 'Game Design & Development',
        emails: ['park1173@purdue.edu', 'junepark720@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/june-park-09b0b1390',
        image: '/assets/members/study/be/junhyeong-park.webp'
      },
      {
        id: 'ex-5',
        role: '스터디 팀장(UIUX)',
        ...sharedProfiles.limSeoyeon
      },
      {
        id: 'ex-6',
        role: '스터디 팀장(AI)',
        ...sharedProfiles.joYoungjin
      },
      {
        id: 'ex-7',
        role: '프로젝트 팀장(코딩)',
        name: '김희수 (Heesoo Kim)',
        major: 'Computer Engineering',
        emails: ['kim2903@purdue.edu', 'heesookim1357@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/heesookiim/',
        image: '/assets/members/study/heesoo-kim.webp'
      },
      {
        id: 'ex-8',
        role: '프로젝트 팀장(비즈니스)',
        name: '양소민 (Somin Yang)',
        major: 'Business Analytics and Information Management',
        emails: ['yang2339@purdue.edu', 'gyslyyy15@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/sominyang',
        image: '/assets/members/study/somin-yang.webp'
      }
    ]
  },
  {
    id: 'study-fe',
    title: '스터디(Frontend)',
    members: [
      {
        id: 'fe-0',
        role: '팀장',
        ...sharedProfiles.choiYewon
      },
      {
        id: 'fe-1',
        role: '멤버',
        name: '김민석 (Minseok Kim)',
        major: 'FYE (ChemE)',
        emails: ['kim5065@purdue.edu', 'skykms970800@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/minseok-kim-742a7737b',
        image: '/assets/members/study/fe/fe-1.webp'
      },
      {
        id: 'fe-2',
        role: '멤버',
        name: '민병일 (Aaron Min)',
        major: 'Computer & Information Technology',
        emails: ['min102@purdue.edu', 'byeongilmin031227@gmail.com'],
        image: '/assets/members/study/fe/fe-2.webp'
      },
      {
        id: 'fe-3',
        role: '멤버',
        name: '정은채 (Eunchae Jung)',
        major: 'Computer & Information Technology',
        emails: ['jung453@purdue.edu', 'jch1209chappy23@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/ellyjung',
        image: '/assets/members/study/fe/fe-3.webp'
      }
    ]
  },
  {
    id: 'study-be',
    title: '스터디(Backend)',
    members: [
      {
        id: 'be-0',
        role: '팀장',
        name: '박준형',
        major: 'Game Design & Development',
        emails: ['park1173@purdue.edu', 'junepark720@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/june-park-09b0b1390',
        image: '/assets/members/study/be/junhyeong-park.webp'
      },
      {
        id: 'be-1',
        role: '멤버',
        name: '김예령',
        major: 'Data Analytics',
        emails: ['kim4351@purdue.edu', 'yehryoung.kim@gmail.com'],
        image: '/assets/members/study/be/yehryoung-kim.webp'
      },
      {
        id: 'be-2',
        role: '멤버',
        name: '이나나',
        major: 'Computer Engineering',
        emails: ['lee3569@purdue.edu', 'nana8380@naver.com'],
        linkedin: 'https://www.linkedin.com/in/nana-lee-5693a9213/',
        image: '/assets/members/study/be/nana-lee.webp'
      },
      {
        id: 'be-3',
        role: '멤버',
        name: '조무현',
        major: 'Data analyst',
        emails: ['cho702@purdue.edu', 'muhyeon7103@gmail.com'],
        image: '/assets/members/study/be/muhyeon-cho.webp'
      }
    ]
  },
  {
    id: 'study-uiux',
    title: '스터디(UIUX)',
    members: [
      {
        id: 'ux-0',
        role: '팀장',
        ...sharedProfiles.limSeoyeon
      },
      {
        id: 'ux-1',
        role: '멤버',
        name: '신찬서 (Chanseo Shin)',
        major: 'UX Design',
        emails: ['shmscs0203@gmail.com', 'shin395@purdue.edu'],
        linkedin: 'https://www.linkedin.com/in/chanseo-shin-b197b32a3',
        image: '/assets/members/study/uiux/ux-1.webp'
      },
      {
        id: 'ux-2',
        role: '멤버',
        name: '양희태 (Paul Yang)',
        major: 'Business Communication, Business Management',
        emails: ['yang3076@purdue.edu', 'didgmlxo6672@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/yang-yang-5913363a2/',
        image: '/assets/members/study/uiux/ux-2.webp'
      },
      {
        id: 'ux-3',
        role: '멤버',
        name: '전호영 (Hoyoung Chun)',
        major: 'Electrical Engineering',
        emails: ['hambur0329@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/hoyoung-chun-232456352',
        image: '/assets/members/study/uiux/ux-3.webp'
      }
    ]
  },
  {
    id: 'study-ai',
    title: '스터디(AI)',
    members: [
      {
        id: 'ai-0',
        role: '팀장',
        ...sharedProfiles.joYoungjin
      },
      {
        id: 'ai-1',
        role: '멤버',
        name: '김지아 (Freesia Kim)',
        major: 'First-Year Engineering',
        emails: ['kim4903@purdue.edu', 'freejia060203@gmail.com'],
        linkedin: 'http://www.linkedin.com/in/freesia-kim-08561231a',
        image: '/assets/members/study/ai/ai-1.webp'
      },
      {
        id: 'ai-2',
        role: '멤버',
        name: '서지은 (Sophia Seo)',
        major: 'First-Year Engineering',
        emails: ['seo162@purdue.edu', '25seosop@gmail.com'],
        image: '/assets/members/study/ai/ai-2.webp'
      },
      {
        id: 'ai-3',
        role: '멤버',
        name: '유승현 (Seunghyun Yoo)',
        major: 'Artificial Intelligence (BS) / Mathematics',
        emails: ['yoo236@purdue.edu', 'seunghyun050616@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/seunghyun-yoo-198589288/',
        image: '/assets/members/study/ai/ai-3.webp'
      }
    ]
  },
  {
    id: 'proj-fluention',
    title: '프로젝트(Fluention)',
    members: [
      {
        id: 'fl-1',
        role: '팀장 & 비즈니스',
        name: '최인재 (Injae Dave Choi)',
        major: 'Business Analytics and Information Management',
        emails: ['choi626@purdue.edu', 'ijchoi012@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/injae-choi-dave-choi626',
        image: '/assets/members/project/fl/injae-choi.webp'
      },
      {
        id: 'fl-2',
        role: '멤버',
        name: '서민지 (Minji Seo)',
        major: 'Marketing & Business Analysis and Information Management',
        emails: ['seo137@purdue.edu', 'allyseo0621@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/minji-seo-4540412bb',
        image: '/assets/members/project/fl/minji-seo.webp'
      },
      {
        id: 'fl-3',
        role: '멤버',
        name: '김희원 (Heewon Kim)',
        major: 'Computer Science',
        emails: ['kim4068@purdue.edu', 'gmldnjskim@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/heewon-kim-538b91224',
        image: '/assets/members/project/fl/heewon-kim.webp'
      },
      {
        id: 'fl-4',
        role: '멤버',
        name: '조현지 (Hyunji (Sophia) Cho)',
        major: 'Computer Science',
        emails: ['cho532@purdue.edu', 'hyunji.cho55@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/hyunjicho-sophia/',
        image: '/assets/members/project/fl/hyunji-cho.webp'
      },
      {
        id: 'fl-5',
        role: '멤버',
        name: '이정연 (Jungyoun Lee)',
        major: 'Computer Science',
        emails: ['lee5051@purdue.edu', 'noveau20@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/jungyounlee/',
        image: '/assets/members/project/fl/jungyoun-lee.webp'
      }
    ]
  },
  {
    id: 'proj-brandsage',
    title: '프로젝트(Brandsage)',
    members: [
      {
        id: 'bs-1',
        role: '팀장 & 비즈니스',
        name: '윤선민 (Seonmin Yoon)',
        major: 'Marketing (Concentration in Data Analytics)',
        emails: ['yoon309@purdue.edu', 'rhombic02@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/seonmin-yoon',
        image: '/assets/members/project/bs/seonmin-yoon.webp'
      },
      {
        id: 'bs-2',
        role: '멤버',
        name: '김동석 (Dongseok Kim)',
        major: 'Supply Chain Management',
        emails: ['kim3639@purdue.edu', 'rlads1324@gmail.com'],
        linkedin: 'https://kr.linkedin.com/in/dongseokkim523',
        image: '/assets/members/project/bs/dongseok-kim.webp'
      },
      {
        id: 'bs-3',
        role: '멤버',
        name: '강건우 (Connor Kang)',
        major: 'Computer Science',
        emails: ['kang497@purdue.edu', 'gkang901@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/gunwoo-kang/',
        image: '/assets/members/project/bs/gunwoo-kang.webp'
      },
      {
        id: 'bs-4',
        role: '멤버',
        name: '장보현 (Bohyeon Jang)',
        major: 'Computer Science',
        emails: ['bijang@purdue.edu', 'bhj37193@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/bohyeon-jang-a709ab238/',
        image: '/assets/members/project/bs/bohyeon-jang.webp'
      },
      {
        id: 'bs-5',
        role: '멤버',
        name: '최예찬 (Ye Chan Choi)',
        major: 'Integrated Business and Engineering',
        emails: ['choi753@purdue.edu', 'ycc030207@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/choiyechan/',
        image: '/assets/members/project/bs/yechan-choi.webp'
      }
    ]
  }
];
