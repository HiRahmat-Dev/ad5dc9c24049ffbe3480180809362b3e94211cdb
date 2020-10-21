import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { Container, ContainerFlex, TextHead, TextCaps, TextSmall, TextHeadBig } from './components/styled-components';
import ButtonBase from '@material-ui/core/ButtonBase';
import moment from 'moment';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { setItems, setFilteredLocation, setSelectedLocation, toggleModal } from './redux/actions';

import AppBar from './components/AppBar';
import AppBody from './components/AppBody';
import ButtonGroup from './components/ButtonGroup';
import Card from './components/Card';
import FloatingCart from './components/FloatingCart';
import Modal from './components/Modal';
import Input from './components/Input';
import CardLocation from './components/CardLocation';

import { categories, calBtnSize } from './settings';
import { rangeDates } from './utils';

const twoWeeks = rangeDates(new Date(), new Date(Date.now() + 12096e5));

var lastScrollTop = 0;

function App() {
  const { menus, cart, modal, locations } = useSelector(state => state);

  const [appBarHeight, setAppBarHeight] = useState(0);
  const [btnGroupHeight, setBtnGroupHeight] = useState(0);
  const [appSize, setAppSize] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [btnGroup, setBtnGroup] = useState(true);
  const [searchValue, setSearch] = useState('');
  const [filteredLocations, setFiltered] = useState([]);

  const [dateNow, setDateNow] = useState('')
  const [buttonActive, setButtonActive] = useState('Lunch');

  const dispatch = useDispatch();

  useEffect(() => {
    const appBar = document.querySelector('.app-bar');
    const appBody = document.querySelector('.app-body');
    const btnGroupCont = document.querySelector('.button-group-container');

    setAppSize(window.innerHeight);
    setAppBarHeight(appBar.offsetHeight);
    setBtnGroupHeight(btnGroupCont.clientHeight);

    window.addEventListener('resize', () => {
      setAppSize(window.innerHeight);
    })
    appBody.addEventListener('scroll', () => {
      setAppBarHeight(appBar.offsetHeight);
    })

    setDateNow(moment(new Date()).format('dddd, DD MMMM yyyy'))
  }, [])
  
  useEffect(() => {
    if (searchValue.length >= 3) {
      let filtered = locations?.data && locations.data.filter((a) => a.title.toLowerCase().includes(searchValue.toLowerCase()));
      filtered.slice(0, 5);
      setFiltered(filtered);
    }
  }, [locations, searchValue])

  return (
    <div className="App">
      <AppBar>
        <CalendarBar>
          <div>
            { twoWeeks.map((value, index) => {
              const day = moment(value).format('ddd');
              const date = moment(value).format('DD');

              return (
                <CalButton key={index}
                  disabled={ day === 'Sun' || day === 'Sat' }
                  className={
                    (dateNow === moment(value).format('dddd, DD MMMM yyyy') ?
                      'cal-button-active' : '') +
                    (day === 'Sun' || day === 'Sat' ?
                      ' disabled' : '')
                  }
                  onClick={() => {
                    setDateNow(moment(value).format('dddd, DD MMMM yyyy'));
                  }}
                >
                  <TextCaps>{ day }</TextCaps>
                  <TextSmall><strong>{ date }</strong></TextSmall>
                </CalButton>
              );
            })}
          </div>
        </CalendarBar>
      </AppBar>

      <AppBody
        style={{
          top: `${appBarHeight}px`,
          height: `${appSize - appBarHeight}px`,
          paddingTop: 50
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
        <ButtonGroupCont
          // className={'button-group-container' + (btnGroup ? '' : ' button-group-hidden')}
          className="button-group-container"
          style={{
            position: 'fixed',
            top: `${btnGroup ? appBarHeight : appBarHeight - 60}px`,
            zIndex: 15,
            transition: '.7s'
          }}
        >
          <Container>
            <ButtonGroup options={categories}
              setActive={setButtonActive}
              active={buttonActive}
            />
          </Container>
        </ButtonGroupCont>
        <DateText>
          <Container>
            <TextHead>{ dateNow }</TextHead>
          </Container>
        </DateText>
        <div>
          <ContainerFlexColumn>
            { menus.map((el, index) => (
              <Card
                key={index}
                data={el}
                onAddClick={() => {
                  dispatch(setItems(el))
                }}
              />
            ))}
          </ContainerFlexColumn>
        </div>
        { cart.count > 0 && <FloatingCart /> }
      </AppBody>
      
      <Modal settings={{ appBarHeight, appSize, btnGroupHeight }}
        modalShow={ modal }
      >
        <Container>
          <TextHeadBig>Cek makanan yang tersedia <br/> di lokasi kamu!</TextHeadBig>
          <Input
            icon={<FaMapMarkerAlt />} id="location" style={{marginTop: 14}} full type="text"
            placeholder="Search location (min. 3 letters)"
            value={searchValue} onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <LocationResult>
            {filteredLocations.length > 0 ? filteredLocations.map((el, index) => {
              return (
                <CardLocation data={el} key={index}
                  onClick={() => {
                    dispatch(setSelectedLocation(el));
                    dispatch(toggleModal(false));
                  }}
                />
              )
            }) : <div style={{ textAlign: 'center', fontWeight: 600 }} >
              { searchValue.length > 0 ? 'Result not found.' : 'Type a location.' }
            </div>}
          </LocationResult>
        </Container>
      </Modal>
    </div>
  );
}

const ContainerFlexColumn = styled(ContainerFlex)`
  flex-direction: column;
  align-items: center;
`;

const CalendarBar = styled.div`
  padding: 0 var(--xs-text) var(--sm-text);
  border-bottom: 1px solid var(--outline-border-color);
  overflow: auto;
  > div {
    display: inline-flex;
    flex-wrap: nowrap;
  }
`;

const CalButton = styled(ButtonBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: var(--xs-text)!important;
  font-family: var(--default-font);
  width: ${calBtnSize}px;
  height: ${calBtnSize}px;
  border-radius: 50% !important;
  transition: .2s;
  &.cal-button-active {
    background-color: var(--main-text-color) !important;
    * {
      color: white !important
    }
  }
  &.disabled {
    * {
      color: var(--background-color) !important;
    }
  }
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

const LocationResult = styled.div`
  margin-top: 36px;
  width: 100%;
`;


export default App;
