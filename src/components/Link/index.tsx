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

  svg {
    width: 100%;
    height: auto;
    fill: #fff;
    cursor: pointer;
  }

  @media (min-width: 960px) {
    :hover:not(:focus) {
      background-color: rgba(255, 255, 255, 0.2);
    }

    :focus {
      outline: 0;
    }

    :active {
      background-color: rgba(255, 255, 255, 0);
    }

    :focus:not(:active) {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`
const Link = (props: any) => {
  return (
    <LinkStyled {...props}>
      {props.children}
    </LinkStyled>
  )
};

export default Link;
