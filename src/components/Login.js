import React from "react";
import { Link, navigate } from "@reach/router";

import auth from "./../js/auth";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }

  handleEmail = (e) => {
    // console.log(e.target.value);
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    // console.log(e.target.value);
    this.setState({ password: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    // console.log(this.state);
    auth.login({
      username: email,
      password,
    });
    // navigate("/account");
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="enter your email"
                value={this.state.email}
                autoComplete="current-email"
                onChange={(e) => this.handleEmail(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                placeholder="enter your password"
                value={this.state.password}
                autoComplete="current-password"
                onChange={(e) => this.handlePassword(e)}
              />
            </label>
          </div>
          <div>
            <button type="submit" onClick={this.handleLogin}>
              Login
            </button>
          </div>
        </form>
        <div>
          <Link to="/forgot-password">
            <span className="link">Forgot password? </span>
          </Link>
          {"     "}
          <Link to="/register">
            <span className="link"> New user? Signup</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
