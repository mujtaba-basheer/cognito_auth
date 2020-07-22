import React from "react";
import { Link, navigate } from "@reach/router";

const auth = require("./../js/auth");

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      conf_password: "",
      fullName: "",
      phone_number: "",
      otp: "",
      isLoading: false,
      isRegistered: false,
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

  handleConfPassword = (e) => {
    // console.log(e.target.value);
    this.setState({ conf_password: e.target.value });
  };

  handleName = (e) => {
    // console.log(e.target.value);
    this.setState({ fullName: e.target.value });
  };

  handleMobileNo = (e) => {
    // console.log(e.target.value);
    this.setState({ phone_number: "+91" + e.target.value });
  };

  handleOtp = (e) => {
    // console.log(e.target.value);
    this.setState({ otp: e.target.value });
  };

  handleRegister = (e) => {
    e.preventDefault();
    const {
      password,
      conf_password,
      fullName,
      email,
      phone_number,
    } = this.state;
    if (password !== conf_password) {
      alert("Passwords don't match!");
    } else {
      const userData = {
        email,
        phone_number,
        name: fullName,
        password,
      };
      auth.register(userData);
      this.setState({
        isRegistered: true,
      });
    }
  };

  handleVerify = (e) => {
    e.preventDefault();
    auth.confirm({
      username: "mujtababasheer14@gmail.com",
      code: this.state.otp,
    });
    console.log("verified");
  };

  resendCode = (e) => {
    e.preventDefault();
    auth.resendCode();
    console.log("verified");
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {this.state.isRegistered ? (
            <div>
              <label htmlFor="otp">
                <input
                  type="number"
                  id="otp"
                  placeholder="enter otp"
                  value={this.state.otp}
                  // autoComplete="current-email"
                  onChange={(e) => this.handleOtp(e)}
                />
              </label>
              <button className="otp-btn" onClick={this.resendCode}>
                Resend OTP
              </button>
              <button className="otp-btn" onClick={this.handleVerify}>
                Verify
              </button>
            </div>
          ) : (
            <React.Fragment>
              <div>
                <label htmlFor="name">
                  <input
                    type="name"
                    id="name"
                    placeholder="enter your full name"
                    value={this.state.name}
                    autoComplete="current-name"
                    onChange={(e) => this.handleName(e)}
                  />
                </label>
              </div>
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
                    autoComplete="new-password"
                    onChange={(e) => this.handlePassword(e)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="conf_password">
                  <input
                    type="password"
                    id="conf_password"
                    placeholder="confirm your password"
                    value={this.state.conf_password}
                    autoComplete="new-password"
                    onChange={(e) => this.handleConfPassword(e)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="mobileNo">
                  <input
                    type="mobile"
                    id="mobileNo"
                    placeholder="enter your mobile no"
                    value={this.state.mobileNo}
                    // autoComplete="current-email"
                    onChange={(e) => this.handleMobileNo(e)}
                  />
                </label>
              </div>
            </React.Fragment>
          )}

          <div>
            {this.state.isRegistered ? (
              <button
                type="submit"
                onClick={() => {
                  navigate("/account");
                }}
              >
                Proceed
              </button>
            ) : (
              <button type="submit" onClick={this.handleRegister}>
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
