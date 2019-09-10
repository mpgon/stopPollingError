import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

test("stopPolling error", () => {
  const { findByText } = render(<App />);
  expect(findByText("Doggy")).toBeTruthy();
});
