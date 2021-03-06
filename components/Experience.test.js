import { render } from "@testing-library/react";

import Experiences from "./Experience";

const list = [
  {
    companyName: "테스트",
    duration: "재직기간",
    job: "직무",
    projects: [
      {
        name: "테스트 프로젝트1",
        summary: "테스트 프로젝트다.",
        duration: "프로젝트 기간",
        skills: ["스킬1", "스킬2"],
        challenges: [],
        roles: [],
        outcomes: [],
      },
      {
        name: "테스트 프로젝트2",
        summary: "테스트 프로젝트다.",
        duration: "프로젝트 기간",
        skills: ["스킬1", "스킬2"],
        challenges: [],
        roles: [],
        outcomes: [],
      },
    ],
  },
];

describe("Experiences", () => {
  it("contains formal task information", () => {
    const { container } = render(<Experiences experiences={list} />);

    expect(container).toHaveTextContent("테스트 프로젝트");
    expect(container).toHaveTextContent("테스트 프로젝트다.");
    expect(container).toHaveTextContent("프로젝트 기간");
    expect(container).not.toHaveTextContent("스킬1");
    expect(container).not.toHaveTextContent("스킬2");
  });
});
