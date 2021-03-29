import React from "react";
import styled from "styled-components";

const RadioOption = styled.label`
  margin-right: 1rem;

  span {
      margin: 0 .5rem
  }
`;

const RadioInput = ({ label, value, checked, setter }) => {
  return (
    <>
      <RadioOption>
        <input
          type="radio"
          checked={checked === value}
          onChange={() => setter(value)}
        />
        <span>{label}</span>
      </RadioOption>
    </>
  );
};

export default RadioInput;
