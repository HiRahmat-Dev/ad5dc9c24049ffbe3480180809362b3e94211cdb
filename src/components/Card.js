import React from "react";
import styled, { TextHead, SubTextSmall } from "./styled-components";
import { MdStar, MdStarHalf, MdAdd } from 'react-icons/md';

import Button from './Button';

import { currencyFormat, capitalize } from '../utils';

function Card({ data, onAddClick }) {
  return (
    <CardCont>
      <div className="card-image">
        <img
          src={ data?.img && data.img }
          alt="foods"
        />
      </div>
      <div className="card-desc">
        <div className="desc-details">
          <Rating>
            <p>{ data?.rating && Number(data.rating).toPrecision(2) }</p>
            <Stars>
              { data?.rating && !data.rating.toString().includes('.') ?
                [...Array(Math.floor(Number(data.rating)))].map((_, index) => <MdStar key={index} />) :
                [...Array(Math.ceil(Number(data.rating)))].map((_, index) => index + 1 < Math.ceil(Number(data.rating)) ?
                  <MdStar key={index} /> : <MdStarHalf key={index} />)
              }
            </Stars>
          </Rating>
          <Title>
            <TextHead>{ data?.title && data.title }</TextHead>
            <SubTextSmall>by Kulina <strong>&middot;</strong> Uptown { data?.category && capitalize(data.category) }</SubTextSmall>
          </Title>
        </div>
        <div className="desc-price">
          <div className="price">
            <TextPrice>{ data?.price && currencyFormat(data.price) }</TextPrice>
          </div>
          <div className="action">
            <AddButton
              endIcon={<MdAdd />}
              size="medium"
              onClick={onAddClick}
            >
              ADD
            </AddButton>
          </div>
        </div>
      </div>
    </CardCont>
  );
}

const CardCont = styled.div`
  border-radius: var(--sm-text);
  box-shadow: var(--default-shadow);
  width: 100%;
  max-width: 800px;
  min-height: 360px;
  margin-bottom: var(--lg-text);
  overflow: hidden;
  .card-image {
    background-color: #dbdbdb;
    width: 100%;
    height: 250px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card-desc {
    padding: var(--lg-text);
    .desc-price {
      margin-top: var(--xl-text);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .price {
        display: flex;
        align-items: center;
      }
      .action {
        width: auto;
        display: flex;
        align-items: center;
      }
    }
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: var(--lg-text);
    font-weight: 600;
    color: var(--sub-text-color);
  }
`;

const Stars = styled.span`
  display: flex;
  align-items: center;
  margin-left: var(--size-0);
  svg {
    font-size: var(--lg-text);
    fill: var(--primary-color);
  }
`;

const Title = styled.div`
  width: 100%;
  margin-top: var(--sm-text);
  p {
    margin: var(--size-0) 0;
  }
`;

const AddButton = styled(Button)`
  background: linear-gradient(var(--primary-color), var(--primary-color));
  color: white !important;
  padding-left: var(--xl-text) !important;
  padding-right: var(--xl-text) !important;
`;

const TextPrice = styled(TextHead)`
  font-size: var(--lg-text);
`;

export default Card;
