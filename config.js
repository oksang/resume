const profile = {
  name: "엄일경",
  summary:
    "스타트업 근무 경험이 있는 3년차 웹개발자. 2년간 SPA와 API 개발을 경험한 뒤, 업무 프로세스 개선을 목표로 매니징 업무를 담당했습니다. 지금은 lighthouse를 이용한 최적화, 바람직한 마크업과 스타일링 기법, 엣지 케이스와 코너 케이스를 고려한 테스트 작성에 흥미가 있습니다.",
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
        name: "Marketit AD",
        summary: "인플루언서 마케팅 광고주 플랫폼",
        duration: "16년 10월 ~ 19년 9월",
        skills: ["angularJS", "ES5", "Bootstrap"],
        descriptions: ["angularJS, ES5, Bootstrap을 활용한 UI 개발"],
      },
      {
        name: "Marketit API",
        summary: "인플루언서 및 광고주 플랫폼, 백오피스에서 사용하는 API",
        duration: "16년 10월 ~ 19년 9월",
        skills: ["angularJS", "ES5", "Bootstrap"],
        descriptions: [
          "php를 활용한 기능 개발 - 서드파티 서비스 통합(결제, 배송추적, sms), CRUD",
          "mysql 쿼리 최적화 및 인덱싱",
        ],
      },
      {
        name: "M.Shop",
        summary: "인플루언서 공동구매 서비스",
        duration: "18년 9월 ~ 19년 9월",
        skills: ["vue.js", "ES6", "Bootstrap"],
        descriptions: ["vue.js, ES5, Bootstrap을 활용한 UI 개발"],
      },
      {
        name: "개발실 프로젝트 관리",
        summary: "사내 협업 프로세스 개선",
        duration: "19년 9월 ~ 20년 3월",
        skills: ["notion", "slack", "jira", "confluence"],
        descriptions: [
          "사내 노션 도입 및 교육 세미나 진행",
          "커뮤니케이션 담당",
          "일정 조율",
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
  },
];

export { profile, experiences, educations };
