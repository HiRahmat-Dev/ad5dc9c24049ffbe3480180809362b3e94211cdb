import React, { useEffect, useState } from 'react';
import styled, { Container, ContainerFlex, TextHead } from './components/styled-components';

import AppBar from './components/AppBar';
import AppBody from './components/AppBody';
import ButtonGroup from './components/ButtonGroup';
import Card from './components/Card';
import FloatingCart from './components/FloatingCart';

const menus = ['Lunch', 'Dinner'];

const cards = [];

var lastScrollTop = 0;

function App() {
  const [appBarHeight, setAppBarHeight] = useState(0);
  const [appSize, setAppSize] = useState(0);
  const [btnGroup, setBtnGroup] = useState(true);
  const [buttonActive, setButtonActive] = useState('Lunch');

  useEffect(() => {
    const viewSize = window.innerHeight;
    const appBar = document.querySelector('.app-bar');
    const appBody = document.querySelector('.app-body');

    setAppSize(viewSize);
    setAppBarHeight(appBar.offsetHeight);

    window.addEventListener('resize', () => {
      setAppSize(window.innerHeight);
    })
    appBody.addEventListener('scroll', () => {
      setAppBarHeight(appBar.offsetHeight);
    })
  }, [])
  
  return (
    <div className="App">
      <AppBar>
        <CalendarBar>
          <Container>
            Calendar
          </Container>
        </CalendarBar>
        <ButtonGroupCont
          className={'button-group-container' + (btnGroup ? '' : ' button-group-hidden')}
        >
          <Container>
            <ButtonGroup options={menus}
              setActive={setButtonActive}
              active={buttonActive}
            />
          </Container>
        </ButtonGroupCont>
      </AppBar>
      <AppBody
        style={{
          top: `${appBarHeight}px`,
          height: `${appSize - appBarHeight}px`
        }}
        onScroll={(e) => {
          var st = window.pageYOffset || e.target.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
          if (st > lastScrollTop){
            setBtnGroup(false);
          } else {
            setBtnGroup(true);
          }
          lastScrollTop = st <= 0 ? 0 : st;
        }}
      >
        <DateText>
          <Container>
            <TextHead>Kamis, 13 Maret 2019</TextHead>
          </Container>
        </DateText>
        <div>
          <ContainerFlexColumn>
            { cards }
          </ContainerFlexColumn>
        </div>
        <FloatingCart />
      </AppBody>
    </div>
  );
}

const ContainerFlexColumn = styled(ContainerFlex)`
  flex-direction: column;
  align-items: center;
`;

const CalendarBar = styled.div`
  padding: var(--md-text) 0;
  border-bottom: 1px solid var(--outline-border-color);
`;

const ButtonGroupCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  box-shadow: 0 8px 10px rgba(10, 31, 68, 0.05);
  background-color: white;
  overflow: hidden;
  transition: .2s;
  z-index: 11;
  &.button-group-hidden {
    height: 0;
  }
`;

const DateText = styled.div`
  width: 100%;
  padding: var(--md-text) 0;
  margin-top: var(--md-text);
`;

for (let i = 0; i < 4; i++) {
  cards.push(<Card key={i}></Card>)
}

export default App;
