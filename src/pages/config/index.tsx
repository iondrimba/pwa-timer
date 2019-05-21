import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import Numbers from './numbers';

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

const positions: any[] = [
  { pos: 0, index: 0, text: 58, style: 'prevHidden' },
  { pos: 45, index: 1, text: 59, style: 'prev' },
  { pos: 85, index: 2, text: 0, style: 'current' },
  { pos: 159, index: 3, text: 1, style: 'next' },
  { pos: 204, index: 4, text: 2, style: 'nextHidden' },
];

const Config = (props: any) => {
  const [elements, setElements] = useState<any>(positions);
  const [i, setI] = useState(0);
  const savedCallback: any = useRef();
  const staticValue: any = useRef();

  function setIndex() {
    if (i + 1 > elements.length - 1) {
      setI(0);
    } else {
      setI(i + 1);
    }

    const arr = positions.map((el: any, ix: any) => {
      if (el.index - 1 < 0) {
        el.index = positions.length - 1;
      } else {
        el.index = el.index - 1;
      }

      return el;
    });

    setElements(arr);
  }

  function callback() {
    setIndex();
  }

  const onButtonClick = () => { }
  const onClick = () => {
    props.navigate('/timer');
  }

  useEffect(() => {
    savedCallback.current = callback;
    staticValue.current = 1;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Wrapper>
      <Legend>
        <Label>Min</Label>
        <Label>Sec</Label>
      </Legend>
      <NumbersWrapper>
        <Numbers elements={elements} positions={positions} />
        <Numbers elements={elements} positions={positions}/>
      </NumbersWrapper>
      <Options>
        <button>1 min</button>
        <button>3 min</button>
        <button>5 min</button>
      </Options>
      <Playbutton type="button" onClick={onClick}>
        <Play />
      </Playbutton>
    </Wrapper >
  )
};

export default Config;
