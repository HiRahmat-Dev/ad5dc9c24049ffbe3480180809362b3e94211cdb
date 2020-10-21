import React from 'react';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md'
import styled, {} from './styled-components';

import { toggleModal } from '../redux/actions';

import Button from './Button';

function Modal({ children, settings, modalShow = false }) {
  const dispatch = useDispatch();

  return (
    <ModalCont>
      <ModalBg />
      <ModalBody
        style={{
          top: `${settings.appBarHeight - settings.btnGroupHeight}px`,
          height: `${settings.appSize - settings.appBarHeight + settings.btnGroupHeight}px`
        }}
      >
        <div className="head-modal">
          <Button iconOnly
            onClick={() => dispatch(toggleModal(false))}
          >
            <MdClose />
          </Button>
        </div>
        <div className="body-modal">
          { children }
        </div>
      </ModalBody>
    </ModalCont>
  );
}

const ModalCont = styled.div`

`;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  z-index: 15;
`;

const modalRadius = 15;
const ModalBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-top-left-radius: ${modalRadius}px;
  border-top-right-radius: ${modalRadius}px;
  background-color: white;
  overflow: hidden;
  z-index: 20;
  .head-modal {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 45px;
    padding
    * {
      font-size: var(--size-2);
    }
  }
  .head-body {
    height: 100%;
    width: 100%;
    overflow: auto;
    padding: var(--lg-text) 0 var(--lg-text);
  }
`;

export default Modal;