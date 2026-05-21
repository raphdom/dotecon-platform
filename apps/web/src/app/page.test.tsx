import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the product name", () => {
    render(<HomePage />);
    expect(screen.getByText("DotEcon Online")).toBeDefined();
  });

  it("renders the coming soon badge", () => {
    render(<HomePage />);
    expect(screen.getByText("Coming soon")).toBeDefined();
  });
});
