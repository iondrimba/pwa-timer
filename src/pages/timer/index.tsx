import React, { useState, useRef, useEffect, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import { ReactComponent as Pause } from '../../icons/pause.svg';
import { ReactComponent as Replay } from '../../icons/replay.svg';
import { ReactComponent as Stop } from '../../icons/stop.svg';
import CircularProgress from '../../components/CircularProgress';
import { Ctx } from '../../app/App';

const Wrapper = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 0;
  width: 320px;
`;

const GlobalStyle = createGlobalStyle`
  label {
    font-family: blue_highwayd;
    width: 60px;
    text-align: center;
    margin: 0 10px;
  }

  span {
    font-family: bebas_neueregular;
  }

  .legend {
    justify-content: space-between;
    display: flex;
    margin-bottom: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-60px) translateX(-50%);
    left: 50%;
  }

  .number-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .numbers {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .numbers:first-child {
    margin: 0;
  }

  .numbers:last-child {
    margin: 0;
  }

  .current {
    font-size:70px;
    margin: 0 10px;
  }
`

const Playbutton = styled.button`
  width: 70px;
  border: none;
  border-radius: 80px;
  height: 70px;
  background-color: #fff;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 1px 8px 24px -6px rgba(0,0,0,.2);
  display: flex;
  justify-content: center;
  svg {
    fill: #6288f7;
    width: 30px;
    margin-left: 0;
  }
`
const convertSecondsToString = (totalSeconds: string = '60') => {
  const sec_num = parseInt(totalSeconds, 10);
  let hours: number = Math.floor(sec_num / 3600);
  let minutes: number = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds: number = sec_num - (hours * 3600) - (minutes * 60);

  return {
    min: `${minutes < 10 ? '0' + minutes : minutes}`,
    sec: `${seconds < 10 ? '0' + seconds : seconds}`
  };
}

const Controls = styled.div`
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const Timer = (props: any) => {
  const context = useContext(Ctx);
  const totalSeconds = 3;
  const [seconds, setSeconds] = useState(totalSeconds);
  const [isComplete, setComplete] = useState(false);
  const [isPaused, setPause] = useState(false);
  const [percent, setPercent] = useState(0);
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
      id = setInterval(tick, 1000)
    }

    return () => clearInterval(id);
  }, [isComplete, isPaused]);

  useEffect(() => {
    const percentage = Math.round((seconds / totalSeconds) * 100);

    if(!isPaused) {
      setPercent((percentage * 251.429) / 100);
    }

    if (percentage === 0) {
      setComplete(true);
    }
  }, [seconds]);

  function replay() {
    setSeconds(totalSeconds);
    setComplete(false);
  }

  function pause() {
    setPause(true);
  }

  function play() {
    setPause(false);
    setComplete(false);
  }

  function stop() {
    setComplete(true);
    setPause(false);
    setSeconds(totalSeconds);
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <CircularProgress percent={percent}>
        <div className="legend">
          <label>Min</label>
          <label>Sec</label>
        </div>
        <div className="number-wrapper">
          <div className="numbers">
            <span className="current">{convertSecondsToString(seconds.toString()).min}</span>
            <span>:</span>
          </div>
          <div className="numbers">
            <span className="current">{convertSecondsToString(seconds.toString()).sec}</span>
          </div>
        </div>
      </ CircularProgress >
      <Controls>
        <Playbutton onClick={play} type="button">
          <Play />
        </Playbutton>
        <Playbutton onClick={pause} type="button">
          <Pause />
        </Playbutton>
        <Playbutton type="button">
          <Replay onClick={replay} />
        </Playbutton>
        <Playbutton onClick={stop} type="button">
          <Stop />
        </Playbutton>
      </Controls>
    </Wrapper >
  )
};

export default Timer;
