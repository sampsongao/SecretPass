import React, { useState } from "react";
import logo from "../../public/images/logo.svg";

import "./LandingPage.css";
import "antd/dist/antd.css";

function LandingPage() {
  const [password, setPassword] = useState("");
  const [decoding, setDecoding] = useState(false);

  // validate password only contains allowed characters
  function isValidPassword(password: string): boolean {
    const allowedCharacters = /^[A-Za-z0-9-_!@#$%^&*()_+]+$/;
    return allowedCharacters.test(password);
  }

  function updatePassword(evt: React.ChangeEvent<HTMLInputElement>) {
    const newPassword = evt?.target?.value;
    if (!isValidPassword(newPassword)) {
      return;
    }
    setPassword(newPassword);
  }

  return (
    <div className="LandingPage">
      <img src={logo} className="Logo" alt="logo" />

      <div className="PasswordInputContainer">
        {decoding ? (
          "Loading ..."
        ) : (
          <input
            className="PasswordInput"
            type="password"
            name="masterPass"
            placeholder="Unlock with your master password"
            value={password}
            onChange={(evt) => updatePassword(evt)}
            onKeyDown={(evt) => {
              if (evt.key === "Enter") {
                setDecoding(true);
              }
            }}
          />
        )}
      </div>
    </div>
  );
}

export default LandingPage;
