import styled, { css } from 'styled-components';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import { ReactComponent as Pause } from '../../icons/pause.svg';
import { ReactComponent as Replay } from '../../icons/replay.svg';
import { ReactComponent as Stop } from '../../icons/stop.svg';
import { Ctx } from '../../app/Store';
import { convertSecondsToString } from '../../helpers';

import CircularProgress, { INITIAL_VALUE } from '../../components/CircularProgress';
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
  width: 200px;
  margin-top: 50px;
  align-items: center;
`;

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
const PlayIcon = styled(Play)`
  margin-left: 4px;
`

const Timer = () => {
  const { navigate, setMinutes, seconds: totalSeconds } = useContext(Ctx);
  const [seconds, setSeconds] = useState(totalSeconds);
  const [isComplete, setComplete] = useState(false);
  const [isPaused, setPause] = useState(false);
  const [percent, setPercent] = useState(INITIAL_VALUE);
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
      setPercent((percentage * INITIAL_VALUE) / 100);
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
    setPercent(INITIAL_VALUE);
  }

  function playPause() {
    if (isComplete) {
      setSeconds(totalSeconds);
      setPause(false);
      setComplete(false);
    }

    setPause(!isPaused);
  }

  function stop() {
    setComplete(true);
    setPause(true);
    setSeconds(totalSeconds);
    setPercent(INITIAL_VALUE);
    setMinutes(0);

    navigate('/config');
  }

  return (
    <WrapperSection>
      <CircularProgress percent={percent}>
        <CircularProgressLegend>
          <label>Min</label>
          <label>Sec</label>
        </CircularProgressLegend>
        <Wrapper aria-live="polite">
          <Number>{convertSecondsToString(seconds.toString()).min}</Number>
          <Divider>:</Divider>
          <Number>{convertSecondsToString(seconds.toString()).sec}</Number>
        </Wrapper>
      </ CircularProgress >
      <Controls>
        <IconButton type="button" onClick={replay} aria-label="replay timer">
          <Replay />
        </IconButton>
        <PlayPauseButton onClick={playPause} type="button" aria-label={`${isPaused || isComplete ? 'start timer' : 'pause timer'}`}>
          <PlayIcon visibility={`${isPaused || isComplete ? 'visible' : 'hidden'}`} />
          <Pause visibility={`${isPaused || isComplete ? 'hidden' : 'visible'}`} />
        </PlayPauseButton>
        <IconButton onClick={stop} type="button" aria-label="stop timer">
          <Stop />
        </IconButton>
      </Controls>
    </WrapperSection >
  )
};

export default Timer;
