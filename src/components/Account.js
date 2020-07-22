import React, { useState } from "react";
import { Link } from "@reach/router";

export default function Account() {
  const [displayToken, setDisplayToken] = useState(false);

  return (
    <div className="account">
      <div>
        <h2 id="data-display">Full Name<br/>
        <span className="acc-det">Mujtaba Basheer</span></h2>
      </div>
      <div>
        <h2 id="data-display">Email<br/>
        <span className="acc-det">mujtababasheer14@gmail.com</span></h2>
      </div>
      <div>
        <h2 id="data-display">User ID<br/>
        <span className="acc-det">cftujhgfr567u</span></h2>
      </div>
      <div>
        <button className="auth-btn" onClick={() => setDisplayToken(!displayToken)}>
          Display Auth Token
        </button>
        {displayToken ? (
          <h2 id="data-display">Auth Token<br/>
          <span className="acc-det">xxxxxxxxxxxxxxxxx</span></h2>
        ) : null}
      </div>
      <div>
        <Link to="/reset-password">
          <button className="reset-btn">Reset Password</button>
        </Link>
      </div>
    </div>
  );
}
