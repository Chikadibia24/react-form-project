import React from "react";


function Email({ type, value, placeholder, label, handleChange }) {
  return (
    <>
      <label htmlFor="email" className="label">
        Email:
      </label>
      <input
        id="email"
        value={value}
        type={type}
        name={label}
        placeholder={placeholder}
        onChange={handleChange}
        className="input"
      />
    </>
  );
}
export default Email;