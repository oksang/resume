import { render } from "@testing-library/react";

import Resume from "../pages/index";

describe("Resume", () => {
  it("contains header, experience, education content", () => {
    const { container } = render(<Resume />);

    expect(container).toHaveTextContent("엄일경");
    expect(container).toHaveTextContent("Marketit");
    expect(container).toHaveTextContent("Codesoom");
  });
});
