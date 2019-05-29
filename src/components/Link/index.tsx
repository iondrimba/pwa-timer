import React, { useRef } from 'react';
import styled from 'styled-components';

const LinkStyled = styled.a`
  background: none;
  border: none;
  border-radius: 48px;
  width: 48px;
  height: 48px;
  padding: 10px;
  cursor: pointer;
  position: relative;
  transition:  background-color .3s;
  background-color: rgba(255, 255, 255, 0);

  .ripple {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    opacity: .2;
    border-radius: 100%;
    transform: scale(1) translate(-50%, -50%);
    top: 50%;
    left: 50%;
    opacity: 0;
    transform-origin: 0 0;
    pointer-events: none;
    z-index: -1;
  }

  .animate {
    animation: 'scaleLink' .3s forwards 1;
    opacity: .2;
  }

  .fade-out {
    animation: 'fadeoutLink' .4s forwards 1;
    opacity: .2;
  }

  @keyframes scaleLink {
    0% {
      transform: scale(1) translate(-50%, -50%);
    }
    100% {
      transform: scale(3) translate(-50%, -50%);
    }
  }

  @keyframes fadeoutLink {
    0% {
      transform: scale(3) translate(-50%, -50%);
      opacity: .2;
    }
    100% {
      transform: scale(3) translate(-50%, -50%);
      opacity: 0;
    }
  }

  svg {
    width: 100%;
    height: auto;
    fill: #fff;
    cursor: pointer;
  }


  @media (min-width: 960px) {
    ::before {
      content: '';
      position: absolute;
      background-color: rgba(255, 255, 255, .46);
      opacity: .01;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      transition: opacity .3s;
      box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.25);
      top: 0;
      left: 0;
    }

    :hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    :active {
      background-color: rgba(255, 255, 255, 0);
    }

    :focus {
      outline: 0;
    }

    :focus::before {
      opacity: .57;
    }

    :active::before {
      opacity: .01;
    }
  }
`
const Link = (props: any) => {
  const inputEl: any = useRef(null);

  function onMouseDown() {
    if (props.ripple) {
      inputEl.current.classList.remove('fade-out');
      inputEl.current.classList.add('animate');

      const id = setTimeout(function () {
        inputEl.current.classList.add('fade-out');
        inputEl.current.classList.remove('animate');

        clearTimeout(id);
      }, 300);
    }
  }

  return (
    <LinkStyled {...props} onTouchStart={onMouseDown} onMouseDown={onMouseDown} >
      {props.children}
      <div ref={inputEl} className="ripple"></div>
    </LinkStyled>
  )
};

export default Link;
