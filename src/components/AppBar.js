import React from 'react';
import styled, { TextCaps, TextHead } from './styled-components';
import { MdArrowBack, MdKeyboardArrowDown } from 'react-icons/md';

import Button from './Button';

function AppBar({ children, customButton }) {
  return (
    <div className="app-bar">
      <AppBarCont>
        <div>
          {customButton ?
            customButton :
            <Button iconOnly>
              <MdArrowBack className="back-button" />
            </Button>
          }
        </div>
        <div>
          <TextCaps>alamat pengantaran</TextCaps>
          <div>
            <TextHead>Tokopedia Tower</TextHead>
            <Button iconOnly size="small">
              <MdKeyboardArrowDown className="down-button" />
            </Button>
          </div>
        </div>
      </AppBarCont>
      {children && children}
    </div>
  );
}

const AppBarCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 var(--xl-text) 0 0;
  > div:first-child {
    width: auto;
  }
  > div:last-child {
    width: 100%;
    padding: var(--md-text) 0;
    > div {
      display: flex;
      align-items: center;
    }
  }
  .back-button {
    font-size: var(--size-2);
    color: var(--main-text-color);
  }
  .down-button {
    color: var(--primary-color);
    font-size: var(--size-1);
  }
`;

export default AppBar;