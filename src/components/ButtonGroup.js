import React from 'react';
import Button from './Button';
import styled from 'styled-components';

function ButtonGroup({ options, setActive, active }) {
  return (
    <div>
      {options && options.map((value, index) => {
        return (
          <StyledButton key={index}
            className={'button-group' + (active === value ? ' button-group-active' : '')}
            size="medium"
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
  &.button-group {
    background: linear-gradient(white, white);
    color: var(--sub-text-color);
    box-shadow: inset 0 0 0 1.4px var(--outline-border-color);
  }
  &.button-group-active {
    background: linear-gradient(var(--main-text-color), var(--main-text-color));
    color: white;
    box-shadow: none;
  }
`;

export default ButtonGroup;