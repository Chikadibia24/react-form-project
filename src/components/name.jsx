import React from "react";


function Name({type, value, placeholder,label,handleChange}) {
  return (
    <>
      <label htmlFor="name" className="label">
        Name:
      </label>
      <input
        id="name"
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
export default Name;