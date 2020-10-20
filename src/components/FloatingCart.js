import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiChevronRight } from 'react-icons/hi';

import styled, { Container, TextHead, TextSmall } from './styled-components';

function FloatingCard() {
  return (
    <ContainerFixed>
      <CartButton>
        <div>
          <div className="cart-desc">
            <TextHead>5 Items | Rp 125,000</TextHead>
            <TextSmall>Termasuk ongkos kirim</TextSmall>
          </div>
          <div className="cart-action">
            <AiOutlineShoppingCart />
            <HiChevronRight />
          </div>
        </div>
      </CartButton>
    </ContainerFixed>
  );
}

const ContainerFixed = styled(Container)`
  position: fixed;
  left: 0;
  bottom: 0;
  padding-bottom: var(--lg-text);
`;

const CartButton = styled(ButtonBase)`
  font-family: var(--default-font);
  background-color: var(--secondary-color) !important;
  width: 100%;
  padding: var(--sm-text) !important;
  color: white !important;
  border-radius: 4px !important;
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .cart-action {
      display: flex;
      align-items: center;
      font-size: var(--size-2);
    }
  }
  * {
    color: white;
  }
`;

export default FloatingCard;