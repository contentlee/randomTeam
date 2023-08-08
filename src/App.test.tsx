import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
  expect(heading.textContent).toBe("파일 업로드");
});
