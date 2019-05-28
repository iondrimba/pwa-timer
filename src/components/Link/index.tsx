import React from 'react';
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

  svg {
    width: 100%;
    height: auto;
    fill: #fff;
    cursor: pointer;
  }

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

  :focus {
    outline: 0;
  }

  :focus::before {
    opacity: .57;
  }

  :active::before {
    opacity: .01;
  }

  :active {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
const Link = (props: any) => {
  return (
    <LinkStyled {...props} >{props.children}</LinkStyled>
  )
};

export default Link;
