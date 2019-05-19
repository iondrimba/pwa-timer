import React from 'react';
import styled from 'styled-components';
import StopWatchIcon from './stopWatch';
import { ReactComponent as Play } from '../../icons/media-play.svg';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: blue_highwayd;
  font-display: fallback;
  margin: 0;
  font-weight: normal;
`;

const Wrapper = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 0;
`;

const Playbutton = styled.button`
  width: 70px;
  border: none;
  border-radius: 80px;
  height: 70px;
  background-color: #fff;
  cursor: pointer;
  margin-top: 60px;
  box-shadow: 1px 8px 24px -6px rgba(0,0,0,.2);
  display: flex;
  justify-content: center;
  svg {
    fill: #6288f7;
    width: 30px;
    margin-left: 6px;
  }
`

const Home: React.FC = () => {
  return (
    <Wrapper>
      <StopWatchIcon/>
      <Title>PWA Timer</Title>
      <Playbutton type="button">
        <Play />
      </Playbutton>
    </Wrapper>
  )
};

export default Home;
