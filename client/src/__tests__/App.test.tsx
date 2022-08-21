import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Main container tests", () => {
  test("App Component rendering test", () => {
    const appContainer = render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByText("Join our society :)")).toBeInTheDocument();
  });
});
