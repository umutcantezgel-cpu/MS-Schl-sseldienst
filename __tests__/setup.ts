import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/headers", () => {
  return {
    headers: vi.fn(() => {
      return new Map([
        ["x-forwarded-for", "127.0.0.1"]
      ]);
    })
  };
});
