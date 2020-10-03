import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from "./App";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  HTMLCanvasElement.prototype.getContext = () => { 
    // return whatever getContext has to return
  };
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders correctly", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent.includes("Jay Lim")).toBe(true)
});