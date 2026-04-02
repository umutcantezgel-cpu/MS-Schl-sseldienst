import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SkipNav } from "@/components/ui/SkipNav";

describe("SkipNav", () => {
  it("renders an anchor linking to #main-content", () => {
    render(<SkipNav />);
    const link = screen.getByText("Zum Hauptinhalt springen");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#main-content");
  });

  it("is initially visually hidden (sr-only class)", () => {
    render(<SkipNav />);
    const link = screen.getByText("Zum Hauptinhalt springen");
    expect(link.className).toContain("sr-only");
  });
});
