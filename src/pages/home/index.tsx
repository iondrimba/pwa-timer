import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Ctx } from '../../app/Store';
import StopWatchIcon from './stopWatch';
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

const Home = () => {
  const { navigate } = useContext(Ctx);

  useEffect(() => {
    console.log('mount');

    return () => {
      console.log('unmount');
    };
  },[]);

  return (
    <Wrapper>
      <StopWatchIcon />
      <Title>PWA Timer</Title>
      <Next type="button" onClick={() => navigate('/config')} aria-label="Configure timer">
        <PlayIcon />
      </Next>
    </Wrapper>
  )
};

export default Home;
