import { render, screen } from "@testing-library/react";

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

      <label for="test">Test</label>
      <input id="test" />
    </>
  );
}

test("renders TestComponent2", () => {
  render(<TestComponent2 />);
  const element = screen.getByRole("button", {
    name: "Test Component1",
  });
  const elementLabel = screen.getByLabelText("Test");
  const elementInput = screen.getByRole("textbox");
  expect(elementInput).toBeInTheDocument();
  expect(elementLabel).toBeInTheDocument();
  expect(element).toBeInTheDocument();
});
