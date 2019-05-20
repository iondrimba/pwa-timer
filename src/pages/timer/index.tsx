import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import { ReactComponent as Pause } from '../../icons/pause.svg';
import { ReactComponent as Replay } from '../../icons/replay.svg';
import { ReactComponent as Stop } from '../../icons/stop.svg';
import CircularProgress from '../../components/CircularProgress';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


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

  .pre-options-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 10px;

    button {
      font-family: blue_highwayd;
      background-color: white;
      color: #627af7;
      border-radius: 20px;
      width: 110px;
      border: none;
      padding: 10px 5px;
      width: 70px;
      margin: 0 10px;
    }
  }

  .current {
    font-size:70px;
    margin: 0 10px;
  }

  .prev {
    font-size: 40px;
    opacity: 0.5;
  }

  .next {
    font-size: 40px;
    opacity: 0.5;
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

const Controls = styled.div`
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const Timer = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <CircularProgress>
        <div className="legend">
          <label>Min</label>
          <label>Sec</label>
        </div>
        <div className="number-wrapper">
          <div className="numbers">
            <span className="current">00</span>
            <span>:</span>
          </div>
          <div className="numbers">
            <span className="current">00</span>
          </div>
        </div>
      </ CircularProgress >
      <Controls>
      <Playbutton type="button">
        <Play />
      </Playbutton>
      <Playbutton type="button">
        <Pause />
      </Playbutton>
      <Playbutton type="button">
        <Replay />
      </Playbutton>
      <Playbutton type="button">
        <Stop />
      </Playbutton>
      </Controls>
    </Wrapper >
  )
};

export default Timer;
