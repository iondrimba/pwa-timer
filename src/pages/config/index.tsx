import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ReactComponent as Play } from '../../icons/media-play.svg';

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
  }
  .number-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;
    justify-content: center;
    height: 250px;
  }

  .numbers {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    margin: 0 14px;
    overflow: hidden;
    height: inherit;
    width: 20%;
    text-align: center;
    align-items: center;

    span {
      position: absolute;
      user-select: none;
    }
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
    transform: translateY(85px);
  }

  .prev {
    font-size: 40px;
    opacity: 0.5;
    transform: translateY(45px);
  }

  .prevHidden {
    font-size: 40px;
    opacity: 0.05;
    transform: translateY(0);
  }

  .next {
    font-size: 40px;
    opacity: 0.5;
    transform: translateY(159px);
  }

  .nextHidden {
    font-size: 40px;
    opacity: 0.05;
    transform: translateY(204px);
  }
`

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
`
declare var TweenMax: any;

const positions: any[] = [
  { pos: 0, index: 0, text: 58 },
  { pos: 45, index: 1, text: 59 },
  { pos: 85, index: 2, text: 0 },
  { pos: 159, index: 3, text: 1 },
  { pos: 204, index: 4, text: 2 },
];

const formatDecimal = (number: number): string => {
  if (number < 10) {
    return `0${number}`;
  }

  return number.toString();
}

const Config = (props: any) => {
  const [counter, setCounter] = useState({ prevHidden: 58, prev: 59, current: 0, next: 1, nextHidden: 2 });
  const [elements, setElements] = useState<any>([]);
  const [i, setI] = useState(0);

  function onClick() {
    props.navigate('/timer');
  }

  window.onclick = () => {
    let index = i + 1;

    if (index > elements.length - 1) {
      index = 0;
    }

    setI(index);

    const arr = positions.map((el: any, ix: any) => {
      if (el.index - 1 < 0) {
        el.index = positions.length - 1;
      } else {
        el.index = el.index - 1;
      }

      return el;
    });

    setElements(arr);
  };


  useEffect(() => {
    elements.map((el: any, index: any) => {
      const elmts = [...document.querySelectorAll('.numbers span')];

      TweenMax.to(elmts[index], .3, {
        transform: `translateY(${positions[el.index].pos}px)`,
        fontSize: el.index == 2 ? 70 : 40,
        opacity: el.index < 1 || el.index >= positions.length - 1 ? .05 : el.index == 2 ? 1 : .3,
        onComplete: (y: any, t: any) => {
          elmts[y].setAttribute('data-id', positions[el.index].pos);

          if (y === positions.length - 1) {
            const a: any = document.querySelector(`[data-id="${positions[positions.length - 2].pos}"]`);
            const b: any = document.querySelector(`[data-id="${positions[positions.length - 1].pos}"]`);

            b.textContent = `${formatDecimal(Number(a.textContent) + 1 > 59 ? 0 : Number(a.textContent) + 1)}`;
          }
        },
        onCompleteParams: [index, el]
      });// eslint-disable-line

    });

  }, [elements]);

  return (
    <Wrapper>
      <GlobalStyle />
      <div className="legend">
        <label>Min</label>
        <label>Sec</label>
      </div>
      <div className="number-wrapper">
        <div className="numbers">
          <span data-id={counter.prevHidden} className="prevHidden">{formatDecimal(counter.prevHidden)}</span>
          <span data-id={counter.prev} className="prev">{formatDecimal(counter.prev)}</span>
          <span data-id={counter.current} className="current">{formatDecimal(counter.current)}</span>
          <span data-id={counter.next} className="next">{formatDecimal(counter.next)}</span>
          <span data-id={counter.nextHidden} className="nextHidden">{formatDecimal(counter.nextHidden)}</span>
        </div>
      </div>
      <div className="pre-options-wrapper">
        <button>1 min</button>
        <button>3 min</button>
        <button>5 min</button>
      </div>
      <Playbutton type="button" onClick={onClick}>
        <Play />
      </Playbutton>
    </Wrapper >
  )
};

export default Config;
