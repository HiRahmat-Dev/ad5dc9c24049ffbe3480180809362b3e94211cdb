import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styled, { TextHead, TextSmall } from './styled-components';

function CardLocation({ data, ...rest }) {
  return (
    <ListLocation { ...rest }>
      <div className="list-icon">
        <div className="rounded-icon">
          <FaMapMarkerAlt />
        </div>
      </div>
      <div className="location-detail">
        <TextHead>{data.title}</TextHead>
        <TextNoWrap>{data.location}</TextNoWrap>
      </div>
    </ListLocation>
  )
}


const icoSize = 25;
const ListLocation = styled.div`
  display: flex;
  align-items: center;
  .list-icon {
    padding: 12px 12px 12px 6px;
    width: auto;
  }
  .rounded-icon {
    display: flex;
    height: ${icoSize}px;
    width: ${icoSize}px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--outline-border-color);
    > svg {
      fill: var(--background-color);
    }
  }
  .location-detail {
    overflow: hidden;
    padding: var(--sm-text) 0;
    border-bottom: 1px solid var(--background-color);
  }
`;

const TextNoWrap = styled(TextSmall)`
  white-space: nowrap;
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export default CardLocation;