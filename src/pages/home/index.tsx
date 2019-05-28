import React, { FC } from 'react';
import styled from 'styled-components';
import StopWatchIcon from './StopWatch';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import PlayPauseButton from '../../components/PlayPauseButton';

const Next = styled(PlayPauseButton)`
  margin-top: 50px;
`
const PlayIcon = styled(Play)`
  margin-left: 4px;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
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

const Home = (props: { navigate: Function }) => {
  function onClick() {
    props.navigate('/config');
  }

  return (
    <Wrapper>
      <StopWatchIcon />
      <Title>PWA Timer</Title>
      <Next type="button" onClick={onClick} aria-label="Configure timer">
        <PlayIcon />
      </Next>
    </Wrapper>
  )
};

export default Home;
