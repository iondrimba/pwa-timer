import React from 'react';
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
  }

  .numbers {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    margin: 0 14px;
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

const Timer: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <div className="legend">
        <label>Hour</label>
        <label>Min</label>
        <label>Sec</label>
      </div>
      <div className="number-wrapper">
        <div className="numbers">
          <span className="prev">23</span>
          <span className="current">00</span>
          <span className="next">01</span>
        </div>
        <div className="numbers">
          <span className="prev">23</span>
          <span className="current">00</span>
          <span className="next">01</span>
        </div>
        <div className="numbers">
          <span className="prev">23</span>
          <span className="current">00</span>
          <span className="next">01</span>
        </div>
      </div>
      <div className="pre-options-wrapper">
        <button>1 min</button>
        <button>3 min</button>
        <button>5 min</button>
      </div>
      <Playbutton type="button">
        <Play />
      </Playbutton>
    </Wrapper >
  )
};

export default Timer;
