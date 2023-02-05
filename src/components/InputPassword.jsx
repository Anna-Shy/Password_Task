import React from "react";

const InputPassword = ({ inputPassword, onChange: handleChange }) => {
  return (
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="text"
        class="form-control"
        value={inputPassword}
        onChange={handleChange}
        placeholder="Password"
      />
    </div>
  );
};

export default InputPassword;
