const lastUpdated = "2021.3.2";

const pageTitle = "엄일경";

const profile = {
  name: "엄일경",
  summary:
    "스타트업 경험이 있는 3년차 웹개발자입니다. 비즈니스 가치를 창출하는 개발을 지향합니다. 주도적으로 업무를 진행할 수 있는 환경을 좋아합니다.",
  github: "https://github.com/oksang",
  blog: "https://oksang.dev",
  mail: "aumilkyeong@gmail.com",
  place: "경기도 성남시",
};

const skills = {
  attitude: [
    "최신 기술 적용보다는 상황에 적절한 기술이 우선한다고 믿습니다.",
    "필요하면 낯선 분야도 적극적으로 학습하여 최적의 결과를 내도록 노력합니다.",
    "프로세스 및 문화 개선에 적극적입니다.",
    "뛰어난 동료들을 관찰하고 배우는 걸 좋아합니다.",
  ],
  communication: [
    "솔직하고 직설적인 소통을 선호합니다.",
    "직위나 포지션에 구애받지 않고 적극적으로 생각을 표현합니다.",
    "합리적인 의사결정을 내리도록 노력합니다.",
    "침묵 보다는 많은 의사 소통이 좋다고 믿습니다.",
  ],
  htmlAndCss: [
    "시맨틱 마크업을 준수하기 위해 노력합니다.",
    "Search Engine Optimization 경험이 있습니다.",
    "다양한 플랫폼 및 브라우저를 지원할 수 있습니다.",
    "CSS-in-JS, CSS module 방법론을 적용할 수 있습니다.",
  ],
  javascript: [
    "ES2015 이후의 자바스크립트 문법에 익숙합니다.",
    "jQuery 없이 DOM API를 다루는데 능숙합니다.",
    "상황에 따라 적절한 자료구조를 선택합니다.",
  ],
  react: [
    "거의 모든 컴포넌트를 함수로 만듭니다.",
    "합리적인 방식으로 컴포넌트를 분리할 수 있습니다.",
    "커스텀 훅으로 공통 비즈니스 로직을 모듈화 할 수 있습니다.",
    "상황에 맞게 PureComponent와 React.memo를 사용합니다.",
    "Redux, Redux Toolkit을 이용해 상태 관리를 할 수 있습니다.",
  ],
  tooling: [
    "Git, Github을 능숙하게 사용합니다.",
    "요구사항에 알맞는 프론트엔드 환경을 세팅할 수 있습니다. (babel, webpack, etc.)",
    "테스트 환경을 세팅할 수 있으며 Github action과 통합할 수 있습니다.",
  ],
  etc: [
    "Docker 이미지를 이용한 개발환경 공유 경험이 있습니다.",
    "AWS EC2, S3, RDS 사용 경험이 있습니다.",
  ],
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

export { pageTitle, profile, skills, experiences, educations, lastUpdated };
