import styled from 'styled-components';

export const TextSmall = styled.p`
  color: var(--main-text-color);
  font-size: var(--md-text);
  font-weight: 600;
  letter-spacing: -2;
`;

export const SubTextSmall = styled(TextSmall)`
  color: var(--sub-text-color);
  font-size: var(--sm-text);
`;

export const TextHead = styled.h2`
  color: var(--main-text-color);
  font-size: var(--lg-text);
  font-weight: 600;
  letter-spacing: -2;
  line-height: 1.5;
`;

export const TextHeadBig = styled(TextHead)`
  font-size: var(--xl-text);
`;

export const TextCaps = styled.p`
  text-transform: uppercase;
  font-size: var(--xs-text);
  font-weight: 600;
  color: var(--sub-text-color);
  letter-spacing: -2;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 var(--lg-text);
`;

export const ContainerFlex = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

export default styled;