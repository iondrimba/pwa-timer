import React from 'react';
import styled from 'styled-components';
import { StopWatch } from './styles';
import { ReactComponent as Icon } from '../../icons/stopwatch.svg';

const Title = styled.span`
  font-size: 1.5em;
  text-align: center;
  font-family: blue_highwayd;
  font-display: fallback;
`;

const Wrapper = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 0;
`;

const Numbers = styled.span`
  font-family: bebas_neueregular;
  font-display: fallback;
  font-size: 120px;
`;

const Home: React.FC = () => {
  return (
    <Wrapper>
      <StopWatch>
        <Icon />
      </StopWatch>
      <Title>PWA Timer</Title>
      <Numbers>25:12:00</Numbers>
    </Wrapper>
  )
};

export default Home;
