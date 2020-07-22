import React, { useState } from "react";
import { navigate } from "@reach/router";

const ResetPassword = () => {
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confNewPass, setConfNewPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ pass, newPass, confNewPass });
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
          <label htmlFor="pass">
            <input
              type="password"
              id="pass"
              placeholder="enter your password"
              value={pass}
              autoComplete="current-password"
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="newPass">
            <input
              type="password"
              id="newPass"
              placeholder="enter new password"
              value={newPass}
              autoComplete="current-password"
              onChange={(e) => setNewPass(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="confNewPass">
            <input
              type="password"
              id="confNewPass"
              placeholder="confirm new password"
              value={confNewPass}
              autoComplete="current-password"
              onChange={(e) => setConfNewPass(e.target.value)}
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

export default ResetPassword;
