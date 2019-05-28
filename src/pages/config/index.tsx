import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as Play } from '../../icons/media-play.svg';

import { Ctx } from '../../app/App';
import { addLeadingZero } from '../../helpers';

import Number from '../../components/Number';
import PillButton from '../../components/PillButton';
import PlayPauseButton from '../../components/PlayPauseButton';
import Divider from '../../components/Divider';
import Legend from '../../components/Legend';

import SectionWrapper from './SectionWrapper';
import Options from './Options';
import NumbersWrapper from './NumbersWrapper';

const Next = styled(PlayPauseButton)`
  margin-top: 50px;
`;

const PlayIcon = styled(Play)`
  margin-left: 4px;
`

const Config = (props: { children: JSX.Element[]; navigate: Function }) => {
  const context = useContext(Ctx);
  const [minutes, setMinutes] = useState(context.minutes);

  const onClick = () => {
    props.navigate('/timer');
  }

  function setMinutesClick(min: number): void {
    context.setMinutes(min);
    setMinutes(min);
  }

  return (
    <SectionWrapper>
      <Legend big>
        <label>Min</label>
        <label>Sec</label>
      </Legend>
      <NumbersWrapper>
        <Number big>{addLeadingZero(minutes)}</Number>
        <Divider big>:</Divider>
        <Number big>{addLeadingZero(context.seconds)}</Number>
      </NumbersWrapper>
      <Options>
        <PillButton onClick={() => setMinutesClick(1)} aria-label="set 1 min">1 min</PillButton>
        <PillButton onClick={() => setMinutesClick(3)} aria-label="set 3 min">3 min</PillButton>
        <PillButton onClick={() => setMinutesClick(5)} aria-label="set 5 min">5 min</PillButton>
        <PillButton onClick={() => setMinutesClick(10)} aria-label="set 10 min">10 min</PillButton>
        <PillButton onClick={() => setMinutesClick(15)} aria-label="set 15 min">15 min</PillButton>
        <PillButton onClick={() => setMinutesClick(30)} aria-label="set 30 min">30 min</PillButton>
      </Options>
      <Next type="button" onClick={onClick} aria-label="start timer">
        <PlayIcon />
      </Next>
    </SectionWrapper >
  )
};

export default Config;
