import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as Play } from '../../icons/media-play.svg';

import { Ctx } from '../../app/Store';

import Number from '../../components/Number';
import PillButton from '../../components/PillButton';
import PlayPauseButton from '../../components/PlayPauseButton';
import Divider from '../../components/Divider';
import Legend from '../../components/Legend';
import { convertSecondsToString } from '../../helpers';

import SectionWrapper from './SectionWrapper';
import Options from './Options';
import NumbersWrapper from './NumbersWrapper';

const Next = styled(PlayPauseButton)`
  margin-top: 50px;
`;

const PlayIcon = styled(Play)`
  margin-left: 4px;
`

const Config = () => {
  const { seconds, setMinutes, navigate, minutesIncrease, minutesDecrease, secondsIncrease, secondsDecrease } = useContext(Ctx);

  return (
    <SectionWrapper>
      <Legend big>
        <label>Min</label>
        <label>Sec</label>
      </Legend>
      <NumbersWrapper>
        <Number big>{convertSecondsToString(seconds.toString()).min}</Number>
        <Divider big>:</Divider>
        <Number big>{convertSecondsToString(seconds.toString()).sec}</Number>
      </NumbersWrapper>
      <NumbersWrapper>
        <div>
          <button type="button" aria-label="Increase minutes" onClick={minutesIncrease}>+</button>
          <button type="button" aria-label="Decrease minutes" onClick={minutesDecrease}>-</button>
        </div>
        <div>
          <button type="button" aria-label="Increase seconds" onClick={secondsIncrease}>+</button>
          <button type="button" aria-label="Decrease seconds" onClick={secondsDecrease}>-</button>
        </div>
      </NumbersWrapper>
      <Options>
        <PillButton onClick={() => setMinutes(1)} aria-label="set 1 min">1 min</PillButton>
        <PillButton onClick={() => setMinutes(3)} aria-label="set 3 min">3 min</PillButton>
        <PillButton onClick={() => setMinutes(5)} aria-label="set 5 min">5 min</PillButton>
        <PillButton onClick={() => setMinutes(10)} aria-label="set 10 min">10 min</PillButton>
        <PillButton onClick={() => setMinutes(15)} aria-label="set 15 min">15 min</PillButton>
        <PillButton onClick={() => setMinutes(30)} aria-label="set 30 min">30 min</PillButton>
      </Options>
      <Next type="button" disabled={(seconds === 0)} onClick={() => navigate('/timer')} aria-label="start timer">
        <PlayIcon />
      </Next>
    </SectionWrapper >
  )
};

export default Config;
