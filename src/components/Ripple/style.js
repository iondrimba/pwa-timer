import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .ripple {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: solid 1px ${props => props.theme.primaryColor};
    opacity: 0;
    border-radius: 100%;
    transform: scale(1);
    top: 50%;
    left: 50%;
    transform-origin: center center;
    pointer-events: none;
    z-index: 2;
  }

  .animate {
    animation: 'scale' ${props => props.theme.animationTiming} .04s forwards 1;
    opacity: .2;
  }

  .fade-out {
    animation: 'fadeout' ${props => props.theme.animationTiming} forwards 1;
    opacity: .2;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(2.5);
    }
  }

  @keyframes fadeout {
    0% {
      transform: scale(2.5);
      opacity: .2;
    }
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }
`
export {
  GlobalStyle,
}
