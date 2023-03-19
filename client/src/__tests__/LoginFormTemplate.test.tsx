import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginFormTemplate from "../components/LoginFormTemplate/LoginFormTemplate";

describe("Login form template tests", () => {
  test("Login component rendering test", () => {
    render(
      <>
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_ID}`}>
          <Router>
            <LoginFormTemplate
              loadingHandler={() => console.log("login handler")}
              loginHandler={(e) => {
                e.preventDefault();
              }}
              onChangeHandler={() => {}}
              email={``}
              password={``}
            />
          </Router>
        </GoogleOAuthProvider>
      </>
    );

    const passwordField = screen.getByPlaceholderText("Password");
    const emailField = screen.getByPlaceholderText("Email");
    const loginButton = screen.getByDisplayValue("Log in");

    const componentElements = [passwordField, emailField, loginButton];

    componentElements.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });

  test("Login click test", () => {
    render(
      <>
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_ID}`}>
          <Router>
            <LoginFormTemplate
              loadingHandler={() => console.log("login handler")}
              loginHandler={(e) => {
                e.preventDefault();
              }}
              onChangeHandler={() => {}}
              email={``}
              password={``}
            />
          </Router>
        </GoogleOAuthProvider>
      </>
    );
    const loginButton = screen.getByDisplayValue("Log in");
    userEvent.click(loginButton);
  });
});
