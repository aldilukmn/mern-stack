import React from "react";
import "./input.scss";

const Input = ({ label, name, ...rest }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input type="text" name={name} id={label} placeholder={label} {...rest} />
    </div>
  );
};

export default Input;
