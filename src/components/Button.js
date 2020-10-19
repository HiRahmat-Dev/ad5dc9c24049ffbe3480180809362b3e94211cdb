import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

export default ({children, iconOnly = false, startIcon, endIcon, size = "medium", ...rest}) => {
  return <>
    {iconOnly ?
      <IconButton
        size={size}
      >
        { children }
      </IconButton> :
      <Button
        startIcon={startIcon && startIcon}
        endIcon={endIcon && endIcon}
        size={size}
        {...rest}
      >
        { children }
      </Button>
    }
  </>;
}