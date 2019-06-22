import React from 'react';
import styled from 'styled-components';

const CircularProgressElmt = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 360px;
  height: auto;

  svg {
    transform: rotate(270deg);
  }

  circle {
    stroke-width: 4;
    fill: none;
  }

  circle: nth-of-type(1) {
    stroke: ${props => props.theme.primaryColor};
    stroke-width: 3.5px;
  }

  circle: nth-of-type(2) {
    stroke: ${props => props.theme.thirdiaryColor};
  }
`

const INITIAL_VALUE = 251.429;

const CircularProgress = (props: { percent: number , children: JSX.Element[] }) => {
  return (
    <CircularProgressElmt>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
        <circle cx="50" cy="50" r="40" ></circle>
        <circle cx="50" cy="50" r="40" strokeDasharray={INITIAL_VALUE} strokeDashoffset={props.percent || 0}></circle>
      </svg>
      {props.children}
    </CircularProgressElmt>
  )
};

export {
  INITIAL_VALUE
};

export default CircularProgress;
