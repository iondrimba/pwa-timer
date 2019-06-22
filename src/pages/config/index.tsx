import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { ReactComponent as Minus } from '../../icons/minus.svg';

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

const PlusMinusButton = styled.button`
  background-color: transparent;
  border: 0;
  color:${props => props.theme.primaryColor};
  font-size: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
  background-color: ${props => props.theme.primaryColorTransparent};
  transition: background-color ${props => props.theme.animationTiming}, color ${props => props.theme.animationTiming}, transform ${props => props.theme.animationTiming};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  :hover, :focus {
    background-color: ${props => props.theme.primaryColorSemiTransparent};
    color:${props => props.theme.primaryColor};
  }

  :focus {
    outline: 0;
  }

  :active {
    transform: translate(2px, 2px);
  }

`
const PlusMinusButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  justify-content: space-evenly;
  margin: 10px 0;

  > div {
    display: flex;
  }
`;

const PlusIcon = styled(Plus)`
  width: 30px;
  fill: ${props => props.theme.primaryColor};
`

const MinusIcon = styled(Minus)`
  width: 30px;
  fill: ${props => props.theme.primaryColor};
`
const Config = () => {
  const { seconds, setMinutes, navigate, minutesIncrease, minutesDecrease, secondsIncrease, secondsDecrease } = useContext(Ctx);

  return (
    <SectionWrapper>
      <Legend big>
        <label>Min</label>
        <label>Sec</label>
      </Legend>
      <NumbersWrapper aria-live="assertive">
        <Number big>{convertSecondsToString(seconds.toString()).min}</Number>
        <Divider big>:</Divider>
        <Number big>{convertSecondsToString(seconds.toString()).sec}</Number>
      </NumbersWrapper>
      <PlusMinusButtonWrapper>
        <div>
          <PlusMinusButton type="button" aria-label="Increase minutes" onClick={minutesIncrease}>
            <PlusIcon />
          </PlusMinusButton>
          <PlusMinusButton type="button" aria-label="Decrease minutes" onClick={minutesDecrease}>
            <MinusIcon />
          </PlusMinusButton>
        </div>
        <div>
          <PlusMinusButton type="button" aria-label="Increase seconds" onClick={secondsIncrease}>
            <PlusIcon />
          </PlusMinusButton>
          <PlusMinusButton type="button" aria-label="Decrease seconds" onClick={secondsDecrease}>
            <MinusIcon />
          </PlusMinusButton>
        </div>
      </PlusMinusButtonWrapper>
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
