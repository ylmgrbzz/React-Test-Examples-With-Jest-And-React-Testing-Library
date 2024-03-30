import { waitFor, render, screen } from "@testing-library/react";
import { useEffect, useState } from "react";
import userEvent from "@testing-library/user-event";

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

function TestComponentExamplesList({ products }) {
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

test("renders TestComponentExamples3", () => {
  const products = [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
    { id: 3, name: "product3" },
  ];
  render(<TestComponentExamplesList products={products} />);
  const element = screen.getByText("product1");
  const elements = screen.getAllByRole("listitem");
  expect(element).toBeInTheDocument();
  expect(elements.length).toBe(3);
  expect(elements[0]).toHaveTextContent("product1");
  expect(elements[1]).toHaveTextContent("product2");
  expect(elements[2]).toHaveTextContent("product3");
  expect(elements[0]).toHaveTextContent(/product1/i);
  expect(elements[1]).toHaveTextContent(/product2/i);
  expect(elements[2]).toHaveTextContent(/product3/i);
  expect(elements).toHaveLength(3);
});

function TestComponentExamplesQuery({ suffix }) {
  return (
    <>
      <div>
        <div>
          {suffix === "1" && <div>Test Component1</div>}
          {suffix === "2" && <div>Test Component2</div>}
          {suffix === "3" && <div>Test Component3</div>}
          {!suffix && <div>suffix yok</div>}
        </div>
      </div>
    </>
  );
}

test("renders TestComponentExamplesQuery", () => {
  render(<TestComponentExamplesQuery suffix="1" />);
  const element = screen.queryByText("Test Component1");
  const element2 = screen.queryByText("Test Component2");
  const element3 = screen.queryByText("Test Component3");
  const elementSuffixYok = screen.queryByText("suffix yok");
  const elementSuffix = screen.queryByText("Test Component1");
  expect(elementSuffixYok).toBeNull();
  expect(elementSuffixYok).not.toBeInTheDocument();
  expect(elementSuffix).toBeInTheDocument();

  expect(element).toBeInTheDocument();
  expect(element2).toBeNull();
  expect(element3).toBeNull();
});

function TestComponentExamplesAsync() {
  const [name, setName] = useState("yalim");

  useEffect(() => {
    setTimeout(() => {
      setName("yalimgrbz");
    }, 300);
    // }, 3000);
  }, []);

  return (
    <>
      <div>
        <div>{name}</div>
      </div>
    </>
  );
}

it("renders TestComponentExamplesAsync", async () => {
  render(<TestComponentExamplesAsync />);
  const element = await screen.findByText("yalimgrbz");
  expect(element).toBeInTheDocument();
});

function TestComponentExamplesAsyncAwaitFor() {
  const [name, setName] = useState("yalim");

  useEffect(() => {
    setTimeout(() => {
      setName("yalimgrbz");
    }, 300);
  }, []);

  return (
    <>
      <div>
        <div>{name}</div>
      </div>
    </>
  );
}

it("renders TestComponentExamplesAsyncAwaitFor", async () => {
  render(<TestComponentExamplesAsyncAwaitFor />);
  await waitFor(() => {
    expect(screen.getByText("yalimgrbz")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.queryByText("yalim")).not.toBeInTheDocument();
  });
});

function TestComponentUseClick() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

        <select multiple>
          <option value="1">Apple</option>
          <option value="2"> Banana </option>
          <option value="3">Cherry</option>
        </select>
      </div>
    </>
  );
}

// it("renders TestComponentUseClick", async () => {
//   render(<TestComponentUseClick />);

//   await userEvent.click(screen.getByRole("button", { name: "Increment" }));
//   await userEvent.type(
//     screen.getByRole("button", { name: "Increment" }),
//     "{enter}"
//   );

//   const fruits = screen.getByRole("listbox");

//   await userEvent.selectOptions(fruits, ["1", "3"]);

//   const incrementButton = screen.getByRole("button", { name: "Increment" });
//   expect(incrementButton).not.toHaveFocus();

//   expect(document.activeElement).not.toBe(incrementButton);

//   expect(screen.getByRole("option", { name: "Apple" }).selected).toBe(true);

//   // expect(screen.getByRole("heading")).toHaveTextContent("2");

//   expect(screen.getByText("2")).toBeInTheDocument();
//   expect(screen.queryByText("0")).not.toBeInTheDocument();

//   const element = screen.queryByText("0");
//   const buttonIncrement = screen.getByText("Increment");
//   const buttonDecrement = screen.getByText("Decrement");

//   expect(element).toBeNull();
//   expect(buttonIncrement).toBeInTheDocument();
//   expect(buttonDecrement).toBeInTheDocument();
// });

test("upload file", async () => {
  const user = userEvent.setup();

  render(
    <div>
      <label htmlFor="file-uploader">Upload file:</label>
      <input id="file-uploader" type="file" />
    </div>
  );
  const file = new File(["hello"], "hello.png", { type: "image/png" });
  const input = screen.getByLabelText(/upload file/i);

  await user.upload(input, file);

  expect(input.files[0]).toBe(file);
  expect(input.files.item(0)).toBe(file);
  expect(input.files).toHaveLength(1);
});

test("upload multiple files", async () => {
  const user = userEvent.setup();

  render(
    <div>
      <label htmlFor="file-uploader">Upload file:</label>
      <input id="file-uploader" type="file" multiple />
    </div>
  );
  const files = [
    new File(["hello"], "hello.png", { type: "image/png" }),
    new File(["there"], "there.png", { type: "image/png" }),
  ];
  const input = screen.getByLabelText(/upload file/i);

  await user.upload(input, files);

  expect(input.files).toHaveLength(2);
  expect(input.files[0]).toBe(files[0]);
  expect(input.files[1]).toBe(files[1]);
});
