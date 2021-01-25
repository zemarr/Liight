import React from "react";

const Button = ({ children, type, className, onClick, onSubmit }) => {
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={onClick}
        onSubmit={onSubmit}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
