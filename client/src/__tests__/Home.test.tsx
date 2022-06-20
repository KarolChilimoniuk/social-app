import React from "react";
import { render } from "@testing-library/react";
import Home from "../Layouts/Home/Home";

describe("Home layout tests", () => {
  test("Home rendering?", () => {
    render(<Home />);
    console.debug(<Home />);
  });
});
