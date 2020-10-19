import React, { useEffect, useState } from 'react';
import styled, { Container, ContainerFlex, TextHead } from './components/styled-components';

import AppBar from './components/AppBar';
import AppBody from './components/AppBody';
import ButtonGroup from './components/ButtonGroup';

const menus = ['Lunch', 'Dinner'];

const boxes = [];

function App() {
  const [appBarHeight, setAppBarHeight] = useState(0);
  const [appSize, setAppSize] = useState(0);
  const [buttonActive, setButtonActive] = useState('Lunch');

  useEffect(() => {
    const appBar = document.querySelector('.app-bar');
    const viewSize = window.innerHeight;
    setAppSize(viewSize);
    setAppBarHeight(appBar.offsetHeight);
  }, [])
  
  return (
    <div className="App">
      <AppBar>
        <CalendarBar>
          <Container>
            Calendar
          </Container>
        </CalendarBar>
      </AppBar>
      <AppBody
        style={{
          top: `${appBarHeight}px`,
          height: `${appSize - appBarHeight}px`
        }}
      >
        <div>
          <Container>
            <ButtonGroup options={menus}
              setActive={setButtonActive}
              active={buttonActive}
            />
          </Container>
        </div>
        <DateText>
          <Container>
            <TextHead>Kamis, 13 Maret 2019</TextHead>
          </Container>
        </DateText>
        <div>
          <ContainerFlex>
            { boxes }
          </ContainerFlex>
        </div>
      </AppBody>
    </div>
  );
}

const CalendarBar = styled.div`
  padding: var(--md-text) 0;
`;

const DateText = styled.div`
  width: 100%;
  padding: var(--md-text) 0;
`;

const Box = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid var(--outline-border-color);
`;

for (let i = 0; i < 10; i++) {
  boxes.push(<Box key={i}></Box>)
}

export default App;
