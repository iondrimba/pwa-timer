import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import { Ctx } from '../../app/App';
import { addLeadingZero } from '../../helpers';
import Number from '../../components/Number';
import PillButton from '../../components/PillButton';
import PlayPauseButton from '../../components/PlayPauseButton';
import Divider from '../../components/Divider';
import Legend from '../../components/Legend';

const Wrapper = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 0;
  width: 320px;
`;

const Options = styled.div` {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 10px;
  height: auto;
  align-content: space-evenly;
  flex-wrap: wrap;

}
`;

const NumbersWrapper = styled.div` {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
  justify-content: center;
  height: 150px;
}
`;

const Config = (props: any) => {
  const context = useContext(Ctx);
  const [minutes, setMinutes] = useState(context.minutes);

  const onClick = () => {
    props.navigate('/timer');
  }

  function setMinutesZZ(min: number): void {
    context.setMinutes(min);
    setMinutes(min);
  }

  return (
    <Wrapper>
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
        <PillButton onClick={() => setMinutesZZ(1)}>1 min</PillButton>
        <PillButton onClick={() => setMinutesZZ(3)}>3 min</PillButton>
        <PillButton onClick={() => setMinutesZZ(5)}>5 min</PillButton>
        <PillButton onClick={() => setMinutesZZ(10)}>10 min</PillButton>
        <PillButton onClick={() => setMinutesZZ(15)}>15 min</PillButton>
        <PillButton onClick={() => setMinutesZZ(30)}>30 min</PillButton>
      </Options>
      <PlayPauseButton type="button" onClick={onClick}>
        <Play />
      </PlayPauseButton>
    </Wrapper >
  )
};

export default Config;
