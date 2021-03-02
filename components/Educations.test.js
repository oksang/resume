import { render } from "@testing-library/react";

import Educations from "./Educations";

const list = [
  {
    title: "테스트1",
    duration: "교육기간1",
    summary: "테스트 교육1.",
    descriptions: ["상세설명1", "상세설명2"],
  },
  {
    title: "테스트2",
    duration: "교육기간2",
    summary: "테스트 교육2.",
    descriptions: ["상세설명3", "상세설명4"],
  },
];

describe("Educations", () => {
  it("contains formal task information", () => {
    const { container } = render(<Educations educations={list} />);

    expect(container).toHaveTextContent("테스트1");
    expect(container).toHaveTextContent("테스트 교육1.");
    expect(container).toHaveTextContent("교육기간1");
    expect(container).toHaveTextContent("상세설명1");
    expect(container).toHaveTextContent("상세설명2");

    expect(container).toHaveTextContent("테스트2");
    expect(container).toHaveTextContent("테스트 교육2.");
    expect(container).toHaveTextContent("교육기간2");
    expect(container).toHaveTextContent("상세설명3");
    expect(container).toHaveTextContent("상세설명4");
  });
});
