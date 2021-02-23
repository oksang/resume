import { render } from "@testing-library/react";

import Resume from "../pages/index";

describe("Resume", () => {
  it("renders without crash", () => {
    const { container } = render(<Resume />);

    expect(container).toHaveTextContent("Hello World");
  });
});
