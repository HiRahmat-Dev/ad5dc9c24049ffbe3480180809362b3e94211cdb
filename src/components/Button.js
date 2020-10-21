import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

export default ({children, iconOnly = false, startIcon, endIcon, size = "medium", ...rest}) => {
  return <>
    {iconOnly ?
      <IconButton
        size={size}
        {...rest}
      >
        { children }
      </IconButton> :
      <StyledButton
        startIcon={startIcon && startIcon}
        endIcon={endIcon && endIcon}
        size={size}
        {...rest}
      >
        { children }
      </StyledButton>
    }
  </>;
}

const StyledButton = styled(Button)`
  font-family: var(--main-font) !important;
  text-transform: capitalize !important;
  font-weight: 600 !important;
`;