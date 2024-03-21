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

function TestComponentExamples() {
  return (
    <>
      <button>Test Component1</button>
      <button>Test Component2</button>
      <button>Test Component3</button>

      <label htmlFor="test">Test</label>
      <input id="test" />

      <input placeholder="TestYlmgrbz" />

      <div>ylmgrbz</div>
    </>
  );
}

test("renders TestComponentExamples", () => {
  render(<TestComponentExamples />);
  const element = screen.getByRole("button", {
    name: "Test Component1",
  });
  const elementLabel = screen.getByLabelText("Test");
  const elementsInput = screen.getAllByRole("textbox");
  const elementPlaceholder = screen.getByPlaceholderText("TestYlmgrbz");
  const elementDiv = screen.getByText("ylmgrbz");
  expect(elementDiv).toBeInTheDocument();
  expect(elementPlaceholder).toBeInTheDocument();
  expect(elementsInput.length).toBe(2);
  expect(elementLabel).toBeInTheDocument();
  expect(element).toBeInTheDocument();
});

function TestComponentExamples2() {
  return (
    <>
      <input value="testValue" />
      <img src="test.png" alt="test" />
      <div title="modern testing">modern testing</div>
      <div data-testid="modern testing">modern testing</div>
    </>
  );
}

test("renders TestComponentExamples2", () => {
  render(<TestComponentExamples2 />);
  const element = screen.getByDisplayValue("testValue");
  const elementImg = screen.getByAltText("test");
  const elementDiv = screen.getByTitle("modern testing");
  const elementDivTestId = screen.getByTestId("modern testing");

  expect(elementDivTestId).toBeInTheDocument();
  expect(elementDiv).toBeInTheDocument();
  expect(elementImg).toBeInTheDocument();
  expect(elementImg).toHaveAttribute("src", "test.png");
  expect(elementImg).toHaveAttribute("alt", "test");
  expect(element).toBeInTheDocument();
});

function TestComponentExamples3({ products }) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
