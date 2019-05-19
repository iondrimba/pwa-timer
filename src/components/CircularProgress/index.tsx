
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { tsPropertySignature } from '@babel/types';

const GlobalStyle = createGlobalStyle`
.circular-progress {
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
    stroke-linecap: round;
  }
  circle: nth-of-type(1) {
    stroke: #fff;
    stroke-width: 3.5px;
  }
  circle: nth-of-type(2) {
    stroke: #5543ff;
    stroke-dasharray: 251.4285714286;
    stroke-dashoffset: 75.4285714286
  }
}
`

const CircularProgress = (props: any) => {
  return (
    <div className="circular-progress">
      <GlobalStyle />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        aria-labelledby='title' role='graphic'>
        <title id='title'>svg circular progress bar</title>
        <circle cx="50" cy="50" r="40" ></circle>
        <circle cx="50" cy="50" r="40" id='pct-ind'></circle>
      </svg>
      {props.children}
    </div>
  )
};

export default CircularProgress;
