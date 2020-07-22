import React, { useState } from "react";
import { navigate } from "@reach/router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, otp });
    navigate("/");
  };

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
              value={email}
              autoComplete="current-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <div>
            <h3>Check your mobile number for OTP</h3>
          </div>
          <label htmlFor="otp">
            <input
              type="text"
              id="otp"
              maxLength={6}
              placeholder="enter otp received"
              value={otp}
              autoComplete="current-password"
              onChange={(e) => setOtp(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
