import React from 'react';
import styled from 'styled-components';
import StopWatchIcon from './stopWatch';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import PlayPauseButton from '../../components/PlayPauseButton';

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

const Home: React.FC = (props: any) => {
  function onClick() {
    props.navigate('/config');
  }

  return (
    <Wrapper>
      <StopWatchIcon/>
      <Title>PWA Timer</Title>
      <PlayPauseButton type="button" onClick={onClick}>
        <Play />
      </PlayPauseButton>
    </Wrapper>
  )
};

export default Home;
