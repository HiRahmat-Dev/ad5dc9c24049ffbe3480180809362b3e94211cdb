import React, { useEffect } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiChevronRight } from 'react-icons/hi';
import { useSpring, animated} from 'react-spring';

import styled, { Container, TextHead, TextSmall } from './styled-components';
import { useSelector } from 'react-redux';

function FloatingCard() {
  const { cart } = useSelector(state => state);

  const props = useSpring({
    to: {opacity: 1, bottom: '0%'},
    from: {opacity: 0, bottom: '-100%'}
  });

  return (
    <ContainerFixed style={props}>
      <CartButton>
        <div>
          <div className="cart-desc">
            <TextHead>{ cart.count } Items <span>|</span> Rp { cart.totalPrices }</TextHead>
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

const ContainerFixed = styled(animated(Container))`
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
    .cart-desc {
      text-align: left;
      > h2 {
        span {
          font-weight: normal;
        }
      }
    }
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