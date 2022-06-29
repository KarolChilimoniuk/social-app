import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Main container tests", () => {
  test("render App Comp", () => {
    const appContainer = render(
      <Router>
        <App />
      </Router>
    );
    console.debug(appContainer);
  });
});
