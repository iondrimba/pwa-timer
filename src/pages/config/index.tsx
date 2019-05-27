import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import Numbers from './numbers';
import { Ctx } from '../../app/App';

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
`;

const Playbutton = styled.button`
  width: 70px;
  border: none;
  border-radius: 80px;
  height: 70px;
  background-color: #fff;
  cursor: pointer;
  margin-top: 60px;
  box-shadow: 1px 8px 24px -6px rgba(0,0,0,.2);
  display: flex;
  justify-content: center;
  svg {
    fill: #6288f7;
    width: 30px;
    margin-left: 6px;
  }
`;

const NumbersWrapper = styled.div` {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
  justify-content: center;
  height: 250px;
}
`;

const Legend = styled.div` {
  justify-content: space-between;
  display: flex;
  margin-bottom: 30px;
}
`;

const Label = styled.div` {
  font-family: blue_highwayd;
  width: 60px;
  text-align: center;
  margin: 0 10px;
}
`;

export const formatDecimal = (number: number): string => {
  if (number < 10) {
    return `0${number}`;
  }

  return number.toString();
}

const Config = (props: any) => {
  const context = useContext(Ctx);
  const [minutes, setMinutes] = useState(context.minutes);

  const onClick = () => {
    props.navigate('/timer');
  }

  function setMinutesZZ(min: number):void {
    context.setMinutes(min);
    setMinutes(min);
  }

  return (
    <Wrapper>
      <Legend>
        <Label>Min</Label>
        <Label>Sec</Label>
      </Legend>
      <NumbersWrapper>
        <span>{formatDecimal(minutes)}</span>
        <span>{formatDecimal(context.seconds)}</span>
      </NumbersWrapper>
      <Options>
        <button onClick={() => setMinutesZZ(1)}>1 min</button>
        <button onClick={() => setMinutesZZ(3)}>3 min</button>
        <button onClick={() => setMinutesZZ(5)}>5 min</button>
      </Options>
      <Playbutton type="button" onClick={onClick}>
        <Play />
      </Playbutton>
    </Wrapper >
  )
};

export default Config;
