import React, { useState } from "react";

import CheckmarksPassword from "./CheckmarksPassword";
import InputPassword from "./InputPassword";

import "./Form.css";

let colorEasyPassword, colorMediumPassword, colorStrongPassword;

const Form = () => {
  const [inputPassword, setInputPassword] = useState("");

  let onlyLetters = inputPassword.match(/[A-Za-z]/);
  let onlyDigits = inputPassword.match(/[0-9]/);
  let onlySymbols = inputPassword.match(/[$-/:-?{-~!"^_`\[\]]/);

  const handleChange = (event) => {
    setInputPassword(event.target.value);
  };

  if (inputPassword.length <= 8) {
    colorEasyPassword = colorMediumPassword = colorStrongPassword = "red";
  } else {
    if (onlyLetters || onlyDigits || onlySymbols) {
      colorEasyPassword = "red";
    } else {
      colorEasyPassword = "grey";
    }

    if (
      (onlyLetters && onlyDigits) ||
      (onlyLetters && onlySymbols) ||
      (onlyDigits && onlySymbols)
    ) {
      colorEasyPassword = colorMediumPassword = "yellow";
    } else {
      colorMediumPassword = "grey";
    }

    if (onlyLetters && onlyDigits && onlySymbols) {
      colorEasyPassword = colorMediumPassword = colorStrongPassword = "green";
    } else {
      colorStrongPassword = "grey";
    }
  }

  return (
    <form>
      <InputPassword value={inputPassword} onChange={handleChange} />

      <p style={{ fontWeight: "bold", marginTop: "15px" }}>
        All checkmarks must turn green, password must have:
      </p>
      <CheckmarksPassword
        text="Easy password (only letters/digits/symbols)"
        color={colorEasyPassword}
      />
      <CheckmarksPassword
        text="Medium password (combination of letters-symbols/letters-digits/digits-symbols)"
        color={colorMediumPassword}
      />
      <CheckmarksPassword
        text="Strong password (has letters, symbols and numbers)"
        color={colorStrongPassword}
      />
    </form>
  );
};

export default Form;
