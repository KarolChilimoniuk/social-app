import { render, screen } from "@testing-library/react";
import RegisterFormTemplate from "../components/RegisterFormTemplate/RegisterFormTemplate";

describe("Registration form template tests", () => {
  test("Registration component rendering test", () => {
    render(
      <>
        <RegisterFormTemplate
          registerHandler={(e) => {
            e.preventDefault();
          }}
          onChangeHandler={() => {}}
          userName={""}
          firstName={""}
          lastName={""}
          password={""}
          repeatedPassword={""}
          birthDate={""}
          email={""}
        />
      </>
    );

    const userNameField = screen.getByPlaceholderText("User name");
    const firstNameField = screen.getByPlaceholderText("First name");
    const lastNameField = screen.getByPlaceholderText("Last name");
    const passwordField = screen.getByPlaceholderText("Password");
    const repeatedPasswordField = screen.getByPlaceholderText(
      "Repeat your password"
    );
    const birthDateField = screen.getByLabelText("Birth date");
    const emailField = screen.getByPlaceholderText("E-mail");

    const componentElements = [
      userNameField,
      firstNameField,
      lastNameField,
      passwordField,
      repeatedPasswordField,
      birthDateField,
      emailField,
    ];

    componentElements.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });
});
