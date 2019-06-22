import styled from 'styled-components';
import React from 'react';

const IconButtonStyled = styled.button`
  width: 50px;
  border: none;
  height: 50px;
  background-color: ${props => props.theme.primaryColorTransparent};
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 90px;
  transition: background-color ${props => props.theme.animationTiming};
  position: relative;

  svg {
    fill: ${props => props.theme.primaryColor};
    width: 24px;
    pointer-events: none;
  }

  :hover:not(:focus) {
    background-color: ${props => props.theme.primaryColorSemiTransparent};
  }

  :focus {
    outline: 0;
  }

  :active {
    background-color: ${props => props.theme.primaryColorTransparent};
  }

  :focus:not(:active) {
    background-color: ${props => props.theme.primaryColorTransparent};
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
