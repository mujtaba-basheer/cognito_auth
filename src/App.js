import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

const App = () => {

  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">
            <img
              src="https://www.pikpng.com/pngl/b/73-732011_aws-cognito-logo-png-transparent-aws-cognito-icon.png"
              alt="cognoto logo"
            />
          </Link>
        </header>
        <Router>
          <Login path="/" />
          <Login path="/login" />
          <Register path="/register" />
          <Account path="/account" />
          <ForgotPassword path="/forgot-password" />
          <ResetPassword path="/reset-password" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
