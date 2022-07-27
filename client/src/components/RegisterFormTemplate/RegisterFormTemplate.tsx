import React from "react";

type RegisterFormTemplProps = {
  registerHandler(e: React.SyntheticEvent): void;
  onChangeHandler(e: React.SyntheticEvent): void;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatedPassword: string;
  birthDate: string;
  email: string;
};

const RegisterFormTemplate = ({
  registerHandler,
  onChangeHandler,
  userName,
  firstName,
  lastName,
  password,
  repeatedPassword,
  birthDate,
  email,
}: RegisterFormTemplProps): JSX.Element => {
  return (
    <>
      <form onSubmit={registerHandler}>
        <div>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={onChangeHandler}
            value={firstName}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={onChangeHandler}
            value={lastName}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="User name"
            name="userName"
            onChange={onChangeHandler}
            value={userName}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={onChangeHandler}
            value={email}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChangeHandler}
            value={password}
          />
        </div>
        <div>
          <label htmlFor="birthDate">Birth date</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Repeat your password"
            name="repeatedPassword"
            onChange={onChangeHandler}
            value={repeatedPassword}
          />
        </div>
        <div>
          <input type="submit" value="Sign up" />
        </div>
      </form>
    </>
  );
};

export default RegisterFormTemplate;
