import React from 'react';
import styled from 'styled-components';

function AppBody({ children, style }) {
  return (
    <div
      className="app-body"
      style={style && style}  
    >
      <AppBodyCont>
        { children }
      </AppBodyCont>
    </div>
  );
}

const AppBodyCont = styled.div`
  position: relative;
  padding: var(--lg-text) 0;
  overflow: auto;
`;

export default AppBody;