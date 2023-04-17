import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import HomePage from "@/app/(user)/page";

describe("HomePage", () => {
  it("renders without crashing", () => {
    render(<HomePage />);
  });
});
