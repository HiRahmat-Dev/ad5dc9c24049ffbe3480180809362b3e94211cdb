import React from 'react';
import styled, { css } from 'styled-components';


function Input({ icon, full = false, id, style, ...rest }) {
  return (
    <InputCont style={ style } full={ full }>
      <label htmlFor={id}>
        { icon }
      </label>
      <input id={id} type="text"
        {...rest}
      />
    </InputCont>
  );
}

const InputCont = styled.div`
  position: relative;
  label {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    > svg {
      fill: var(--primary-color);
      margin-top: 2px;
    }
  }
  input {
    border: 1px solid var(--outline-border-color);
    outline: 1px solid var(--outline-border-color);
    padding: var(--sm-text);
    padding-left: 40px;
    font-family: var(--default-font);
    font-size: var(--lg-text);
    color: var(--main-text-color);
    font-weight: 500;
  }
${({full}) => full && css`
  width: 100%;
  input {
    width: 100%;
  }
`}
`;

export default Input;