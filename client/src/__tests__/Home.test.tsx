import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Home from "../Layouts/Home/Home";

describe("Home layout tests", () => {
  test("Home rendering?", () => {
    const homeComponent = render(
      <Router>
        <Home />
      </Router>
    );
    console.debug(homeComponent);
    expect(screen.getByText("Join our society :)")).toBeInTheDocument();
  });
});
