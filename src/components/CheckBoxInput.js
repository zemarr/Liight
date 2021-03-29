import React from "react";
import styled from "styled-components";

const CheckboxOption = styled.label`
  margin-right: 0.5rem;

  span {
    margin: 0 0.5rem;
    font-size: 15px;

    @media screen and (max-width: 320px) {
      font-size: 14px;
    }
  }
`;

const CheckBoxInput = ({ value, checked, setter }) => {
  return (
    <>
      <CheckboxOption>
        <input
          type="checkbox"
          checked={checked === value}
          onChange={() => setter(value)}
        />
        <span>
          By sigining up, I agree to the Liight <b style={{fontWeight: "600", fontSize: "14px", color: "#6ccce1" }}>Terms & Conditions</b> and{" "}
          <b style={{fontWeight: "600", fontSize: "14px", color: "#6ccce1" }}>Privacy</b>
        </span>
      </CheckboxOption>
    </>
  );
};

export default CheckBoxInput;
