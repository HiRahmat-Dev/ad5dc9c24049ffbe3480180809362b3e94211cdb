import styled from 'styled-components';

export const TextSmall = styled.p`
  color: var(--main-text-color);
  font-size: var(--md-text);
  font-weight: 500;
  letter-spacing: -2;
`;

export const TextHead = styled.h2`
  color: var(--main-text-color);
  font-size: var(--lg-text);
  font-weight: 600;
  letter-spacing: -2;
`;

export const TextCaps = styled.p`
  text-transform: uppercase;
  font-size: var(--sm-text);
  font-weight: 500;
  color: var(--sub-text-color);
  letter-spacing: -2;
`;

export const Container = styled.div`
  padding: 0 var(--xl-text);
`;

export default styled;