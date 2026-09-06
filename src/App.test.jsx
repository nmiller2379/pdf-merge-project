// Simple test to check functionality of testing setup. Testing that App component renders a heading of PDF Merger Workspace.
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders PDF Merger Workspace heading", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", { name: /PDF Merger Workspace/i });
  expect(headingElement).toBeInTheDocument();
});