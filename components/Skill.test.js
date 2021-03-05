import { render } from "@testing-library/react";

import Skill from "./Skill";

const skill = {
  attitude: ["태도나 신념"],
  communication: ["communication 역량"],
  htmlAndCss: ["html&css 역량"],
  javascript: ["javascript 역량"],
  react: ["react 역량"],
  tooling: ["tooling 역량"],
  etc: ["기타 역량"],
};

describe("Skill", () => {
  it("contains skill information", () => {
    const { container } = render(<Skill skillSet={skill} />);

    expect(container).toHaveTextContent("태도나 신념");
    expect(container).toHaveTextContent("communication 역량");
    expect(container).toHaveTextContent("html&css 역량");
    expect(container).toHaveTextContent("javascript 역량");
    expect(container).toHaveTextContent("react 역량");
    expect(container).toHaveTextContent("기타 역량");
  });
});
