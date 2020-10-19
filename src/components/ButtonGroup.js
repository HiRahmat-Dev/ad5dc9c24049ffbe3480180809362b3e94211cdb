import React from 'react';
import Button from './Button';
import styled from 'styled-components';

function ButtonGroup({ options, setActive, active }) {
  return (
    <div>
      {options && options.map((value, index) => {
        return (
          <StyledButton key={index}
            className={active === value ? 'button-active' : ''}
            size="small"
            onClick={() => setActive(value)}
          >
            { value }
          </StyledButton>
        )
      })}
    </div>
  );
}

const StyledButton = styled(Button)`
  width: 50%;
  font-family: var(--main-font) !important;
  text-transform: capitalize !important;
  font-size: var(--md-text) !important;
  font-weight: 600 !important;
  border-radius: 0 !important;
  &:first-child {
    border-top-left-radius: 4px !important;
    border-bottom-left-radius: 4px !important;
  }
  &:last-child {
    border-top-right-radius: 4px !important;
    border-bottom-right-radius: 4px !important;
  }
  &.button-active {
    background: linear-gradient(#424749, #424749);
    color: white;
  }
`;

export default ButtonGroup;