import React from "react";


function PhoneNumber({ type, value, placeholder, label, handleChange }) {
  return (
    <>
      <label htmlFor="phone" className="label">
        Phone Number:
      </label>
      <input
        id="phone"
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
export default PhoneNumber;