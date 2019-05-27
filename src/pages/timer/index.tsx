import styled, { css } from 'styled-components';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import { ReactComponent as Pause } from '../../icons/pause.svg';
import { ReactComponent as Replay } from '../../icons/replay.svg';
import { ReactComponent as Stop } from '../../icons/stop.svg';
import { Ctx } from '../../app/App';
import { convertSecondsToString } from '../../helpers';

import CircularProgress from '../../components/CircularProgress';
import Number from '../../components/Number';
import IconButton from '../../components/IconButton';
import PlayPauseButton from '../../components/PlayPauseButton';
import Divider from '../../components/Divider';
import CircularProgressLegend from '../../components/CircularProgressLegend';

const WrapperSection = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 0;
  width: 320px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 260px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`
const Timer = (props: any) => {
  const context = useContext(Ctx);
  const totalSeconds = 3;
  const [seconds, setSeconds] = useState(totalSeconds);
  const [isComplete, setComplete] = useState(true);
  const [isPaused, setPause] = useState(true);
  const [percent, setPercent] = useState(251.429);
  const savedCallback: any = useRef();

  function callback() {
    if (!isComplete || !isPaused) {
      setSeconds(seconds - 1);
    }
  }

  useEffect(() => {
    savedCallback.current = callback;

    convertSecondsToString();
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = 0;

    if (isComplete || isPaused) {
      clearInterval(id);
    } else {
      id = setInterval(tick, 1000);
    }

    return () => clearInterval(id);
  }, [isComplete, isPaused]);

  useEffect(() => {
    const percentage = Math.round((seconds / totalSeconds) * 100);

    if (!isPaused) {
      setPercent((percentage * 251.429) / 100);
    }

    if (percentage === 0) {
      setPause(true);
      setComplete(true);
    }
  }, [seconds]);

  function replay() {
    setSeconds(totalSeconds);
    setPause(false);
    setComplete(false);
    setPercent(251.429);
  }

  function playPause() {
    setPause(!isPaused);
    setComplete(!isComplete);
  }

  function stop() {
    setComplete(true);
    setPause(true);
    setSeconds(totalSeconds);
    setPercent(251.429);

    props.navigate('/config');
  }

  return (
    <WrapperSection>
      <CircularProgress percent={percent}>
        <CircularProgressLegend>
          <label>Min</label>
          <label>Sec</label>
        </CircularProgressLegend>
        <Wrapper>
          <Number>{convertSecondsToString(seconds.toString()).min}</Number>
          <Divider>:</Divider>
          <Number>{convertSecondsToString(seconds.toString()).sec}</Number>
        </Wrapper>
      </ CircularProgress >
      <Controls>
        <IconButton type="button" onClick={replay}>
          <Replay />
        </IconButton>
        <PlayPauseButton onClick={playPause} type="button">
          <Play visibility={`${isPaused || isComplete ? 'visible' : 'hidden'}`} />
          <Pause visibility={`${isPaused || isComplete ? 'hidden' : 'visible'}`} />
        </PlayPauseButton>
        <IconButton onClick={stop} type="button">
          <Stop />
        </IconButton>
      </Controls>
    </WrapperSection >
  )
};

export default Timer;
