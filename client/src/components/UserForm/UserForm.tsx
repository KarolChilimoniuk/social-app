import React, { useState } from "react";

const UserForm = (): JSX.Element => {
  const [haveAccount, setAccountStatus] = useState<boolean>(false);

  const accountStatus = (): void => {
    setAccountStatus(!haveAccount);
  };
  const registerHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log("Sign up process");
  };
  const loginHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log("Login process");
  };

  return (
    <>
      {!haveAccount && (
        <>
          <form onSubmit={registerHandler}>
            <div>
              <input type="string" placeholder="Username" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <input type="password" placeholder="Repeat your password" />
            </div>
            <div>
              <input type="submit" value="Sign up" />
            </div>
          </form>
          <button onClick={accountStatus}>
            Do you have an account? Log in!
          </button>
        </>
      )}
      {haveAccount && (
        <>
          <form onSubmit={loginHandler}>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <input type="submit" value="Log in" />
            </div>
          </form>
          <button onClick={accountStatus}>Do you have account? Register</button>
        </>
      )}
    </>
  );
};

export default UserForm;
