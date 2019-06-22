import React from 'react';
import styled from 'styled-components';

const PillButtonStyled = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
  border-radius: 20px;
  width: 110px;
  cursor: pointer;
  border: none;
  padding: 10px 5px;
  width: 110px;
  margin: 5px 5px;
  position: relative;
  transition: background-color ${props => props.theme.animationTiming}, color ${props => props.theme.animationTiming}, transform ${props => props.theme.animationTiming};
  will-change: transform;

  ::before {
    content: '';
    position: absolute;
    background-color:${props => props.theme.primaryColorTransparent};
    opacity: .1;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: opacity ${props => props.theme.animationTiming};
    box-shadow: 0px 0px 0px 3px ${props => props.theme.primaryColor};
    top: 0;
    left: 0;
  }

  :hover, :focus {
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};
  }

  :focus {
    outline: 0;
  }

  :focus::before {
    opacity: .5;
  }

  :active {
    transform: translate(2px, 2px);
  }

  :active::before {
    opacity: .01;
  }
`

const PillButton = (props: any) => {
  return (
    <PillButtonStyled {...props}>
      {props.children}
    </PillButtonStyled>
  )
};

export default PillButton;
