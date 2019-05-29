import React, { useRef } from 'react';
import styled from 'styled-components';

const PillButtonStyled = styled.button`
  background-color: white;
  color: #3549b3;
  border-radius: 20px;
  width: 110px;
  cursor: pointer;
  border: none;
  padding: 10px 5px;
  width: 110px;
  margin: 5px 5px;
  position: relative;
  transition: background-color .3s, color .3s;

  ::before {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0);
    opacity: .1;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: opacity .3s;
    box-shadow: 0px 0px 0px 3px rgba(255, 255, 255, 1);
    top: 0;
    left: 0;
  }

  :hover, :focus {
    background-color: #3549b3;
    color: #fff;
  }

  :focus {
    outline: 0;
  }

  :focus::before {
    opacity: .5;
  }

  :active::before {
    opacity: .01;
  }

  .ripple {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    opacity: 0;
    border-radius: 100%;
    transform: scale(1);
    top: 50%;
    left: 50%;
    transform-origin: center center;
    pointer-events: none;
  }

  .animate {
    animation: 'scale' .3s .03s forwards 1;
    opacity: .2;
  }

  .fade-out {
    animation: 'fadeout' .4s forwards 1;
    opacity: .2;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(3);
    }
  }

  @keyframes fadeout {
    0% {
      transform: scale(3);
      opacity: .2;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }

`

const PillButton = (props: any) => {
  const inputEl: any = useRef(null);

  function onMouseDown(evt: any) {
    evt.persist();

    inputEl.current.classList.remove('fade-out');
    inputEl.current.classList.add('animate');

    const width = inputEl.current.getBoundingClientRect().width;
    const height = inputEl.current.getBoundingClientRect().height;
    const halfW = width/2;
    const halfH = height/2;
    const top = evt.nativeEvent.offsetY - halfH;
    const left = evt.nativeEvent.offsetX - halfW;

    inputEl.current.style.top = `${top}px`;
    inputEl.current.style.left = `${left}px`;

    const id = setTimeout(function () {
      inputEl.current.classList.add('fade-out');
      inputEl.current.classList.remove('animate');

      clearTimeout(id);
    }, 300);
  }

  return (
    <PillButtonStyled {...props} onMouseDown={onMouseDown} >
      {props.children}
      <div ref={inputEl} className="ripple"></div>
    </PillButtonStyled>
  )
};

export default PillButton;
