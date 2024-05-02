import { render } from "@testing-library/react";
import StarRating from "./StarRating";

describe("StarRating Component", () => {
  test("matches the snapshot", () => {
    const { asFragment } = render(<StarRating rating={3} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("displays correct number of filled stars for a rating", () => {
    const { container } = render(<StarRating rating={3} />);
    expect(container.textContent).toMatch("★★★");
  });

  test("handles ratings below 0 and above 5 correctly", () => {
    const { rerender, container } = render(<StarRating rating={-1} />);
    expect(container.textContent).toMatch("");

    rerender(<StarRating rating={6} />);
    expect(container.textContent).toMatch("★★★★★");
  });
});
