import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { AddMembersContainer } from "./containers";

test("renders learn react link", () => {
  render(<AddMembersContainer />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
  expect(heading.textContent).toBe("파일 업로드");
});
