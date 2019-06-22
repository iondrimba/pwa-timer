import React, { useEffect, useRef } from 'react';
import { GlobalStyle } from './style';

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

          return elmt;
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
