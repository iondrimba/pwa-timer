import React, { useEffect, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .ripple {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: solid 1px #fff;
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
    animation: 'scale' .3s .04s forwards 1;
    opacity: .2;
  }

  .fade-out {
    animation: 'fadeout' .3s forwards 1;
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

const Ripple = () => {
  const ripple: any = useRef(null);
  const callback: any = (evt: any) => {
    ripple.current.classList.remove('fade-out');
    ripple.current.classList.add('animate');

    const width = ripple.current.getBoundingClientRect().width;
    const height = ripple.current.getBoundingClientRect().height;
    const halfW = width / 2;
    const halfH = height / 2;
    const top = evt.pageY - halfH;
    const left = evt.pageX - halfW;

    ripple.current.style.top = `${top}px`;
    ripple.current.style.left = `${left}px`;

    const id = setTimeout(function () {
      if (ripple.current) {
        ripple.current.classList.add('fade-out');
        ripple.current.classList.remove('animate');
      }

      clearTimeout(id);
    }, 300);
  };

  useEffect(() => {
    const elements = [...window.document.querySelectorAll('button, a')];

    elements.map((elmt) => {
      elmt.addEventListener('mousedown', callback);

      return () => {
        elements.map((elmt) => {
          elmt.removeEventListener('mousedown', callback);
        });
      }
    });
  });

  return (
    <>
      <GlobalStyle />
      <div ref={ripple} className="ripple" />
    </>
  )
};

export default Ripple;
