const lastUpdated = "2021.3.2";

const pageTitle = "엄일경";

const profile = {
  name: "엄일경",
  summary:
    "스타트업 근무 경험이 있는 3년차 웹개발자. 주로 angularJS, ES5+, Bootstrap을 활용한 UI 작성, php api를 작성하는 작업을 했습니다. AWS, Git & Github 환경에 익숙하며 notion, slack, jira 같은 도구도 친숙합니다. 지금은 lighthouse를 이용한 최적화, 바람직한 마크업과 스타일링 기법, 엣지 케이스와 코너 케이스를 고려한 테스트 작성에 흥미가 있습니다.",
  github: "https://github.com/oksang",
  blog: "https://oksang.dev",
  mail: "aumilkyeong@gmail.com",
  place: "경기도 성남시",
};

const experiences = [
  {
    companyName: "Marketit",
    duration: "16년 10월 ~ 20년 3월",
    job: "웹개발자, 매니저",
    projects: [
      {
        name: "업무 프로세스 개선",
        summary: "노션 도입으로 사내 위키, 작업 관리를 통합",
        duration: "19년 9월 ~ 20년 3월",
        skills: ["notion", "slack", "jira", "confluence"],
        challenges: [
          "slack 위주의 업무 진행",
          "현안 집중도는 우수하지만, 장기적인 컨텍스트 파악 한계",
          "채널에 귀속된 채팅 내용을 유연하게 관심사별로 보기 어려움",
          "검색 능력의 개인차가 심해 원하는 정보를 적시에 얻지 못함",
        ],
        roles: [
          "notion을 문서 허브로 도입하여 사내 문서들의 연결 개선",
          "동료들의 적응을 돕는 팀별 세미나 진행",
          "이슈별 일정 조율 및 커뮤니케이션 담당",
        ],
        outcomes: [
          "칸반 보드로 전체 진행 상황을 한눈에 보고, 기존 작업이나 관련 문서까지 파악 용이해짐",
        ],
      },
      {
        name: "M.Shop",
        summary: "인플루언서 공동구매 서비스",
        duration: "18년 9월 ~ 19년 9월",
        skills: ["vue.js", "ES6", "Bootstrap"],
        challenges: ["빠른 시간안에 vue.js 학습 및 UI 구현"],
        roles: [
          "vue.js, ES6, Bootstrap을 활용한 UI 개발",
          "캠페인 대시보드, 제품 소개, 제품 상세 페이지 구현 및 유지보수",
        ],
        outcomes: [
          "서비스 종료 - 복합적인 원인이 있었지만, 품질 개선에 기여하지 못한 부분에 책임을 깊게 느낌",
        ],
      },
      {
        name: "Marketit AD",
        summary: "인플루언서 마케팅 광고주 플랫폼",
        duration: "16년 10월 ~ 19년 9월",
        skills: ["angularJS", "ES5", "Bootstrap"],
        challenges: [
          "프로젝트 복잡도가 늘어나면서 전반적인 성능 하락 경험",
          "angularJS - 양방향 바인딩 watcher 패턴 이슈",
        ],
        roles: [
          "angularJS, ES5, Bootstrap을 활용한 UI 개발",
          "캠페인 대시보드, 인플루언서 검색, 주문관리 페이지 구현 및 유지보수",
        ],
        outcomes: [
          "1안: 다른 프레임워크로 제품을 다시 만들기",
          "2안: 기존 페이지를 여러 페이지로 나누기",
          "2안 채택 - 개발자들의 학습 곡선, 생산성 문제",
          "성능 개선은 성공, 사용자는 번거로워졌다는 피드백",
          "당시 더 나은 대안을 제시하지 못했고, 아쉬움 속에 작업 종료",
        ],
      },
      {
        name: "Marketit API",
        summary: "인플루언서 및 광고주 플랫폼, 백오피스에서 사용하는 API",
        duration: "16년 10월 ~ 19년 9월",
        skills: ["php", "mysql"],
        challenges: ["쿼리 성능 저하", "중복/의미불명 api 문제"],
        roles: [
          "php를 활용한 기능 개발 - 서드파티 서비스 통합(결제, 배송추적, sms), CRUD",
          "응답이 느린 api 색출 -> describe문으로 쿼리 점검 -> 구문 조정 또는 인덱싱",
        ],
        outcomes: [
          "쿼리 성능 개선은 성공",
          "관리 정책은 해결하지 못하고 동료 개발자가 RESTful API 프로젝트를 시작하면서 정리",
        ],
      },
    ],
  },
];

const educations = [
  {
    title: "코드숨",
    duration: "20년 6월 ~ 20년 9월",
    summary: "소프트웨어 개발의 지혜 - 리액트편",
    topics: [
      "테스트 주도 개발",
      "Flux Architecture & Redux",
      "Async Processing",
      "Routing",
      "CSS-in-JS",
    ],
  },
];

export { pageTitle, profile, experiences, educations, lastUpdated };
