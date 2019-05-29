import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';

const IconButtonStyled = styled.button`
  width: 50px;
  border: none;
  height: 50px;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 90px;
  transition: background-color .2s;
  position: relative;

  svg {
    fill: #fff;
    width: 24px;
    pointer-events: none;
  }

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
`

const IconButton = (props: any) => {
  return (
    <IconButtonStyled {...props} >
      {props.children}
    </IconButtonStyled>
  )
};

export default IconButton;
