import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Email = ({ error, onClose }) => {
  return (
    <div>
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        {error}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
      </div>
    </div>
  );
};

export default Email;
