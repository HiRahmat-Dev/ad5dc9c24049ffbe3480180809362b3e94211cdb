import React from 'react';
import styled from 'styled-components';

function AppBody({ children, style, onScroll }) {
  return (
    <div
      className="app-body"
      style={style && style}
      onScroll={onScroll} 
    >
      <AppBodyCont>
        { children }
      </AppBodyCont>
    </div>
  );
}

const AppBodyCont = styled.div`
  position: relative;
  overflow: auto;
`;

export default AppBody;