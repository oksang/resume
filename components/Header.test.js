import { render } from "@testing-library/react";

import Header from "./Header";

const profile = {
  name: "김테스트",
  github: "깃헙주소",
  blog: "블로그주소",
  mail: "메일주소",
  place: "거주지",
};

describe("Header", () => {
  it("contains name and contact information", () => {
    const { container } = render(
      <Header profile={profile} updated="9999.99.99" />
    );

    expect(container).toHaveTextContent("김테스트");
    expect(container).toHaveTextContent("깃헙주소");
    expect(container).toHaveTextContent("블로그주소");
    expect(container).toHaveTextContent("메일주소");
    expect(container).toHaveTextContent("거주지");
    expect(container).toHaveTextContent("9999.99.99");
  });
});
