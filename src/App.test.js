import { render, screen } from "@testing-library/react";
import App from "./App";

function TestComponent() {
  return <div role="button">Test Component</div>;
}

test("renders TestComponent", () => {
  render(<TestComponent />);
  const linkElement = screen.getByText(/Test Component/i);
  const element = screen.getByRole("button");
  expect(element).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});

function TestComponent2() {
  return (
    <>
      <button>Test Component1</button>
      <button>Test Component2</button>
      <button>Test Component3</button>
    </>
  );
}

test("renders TestComponent2", () => {
  render(<TestComponent2 />);
  const element = screen.getByRole("button", {
    name: "Test Component1",
  });
  expect(element).toBeInTheDocument();
});
