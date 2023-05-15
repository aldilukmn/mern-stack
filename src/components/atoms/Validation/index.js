import React from "react";
import "./validation.scss"

const Validation = ({error, ...rest}) => {
  return (
    <>
      <p className="validation">{error}</p>
    </>
  );
};

export default Validation;
