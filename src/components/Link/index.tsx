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
  transition:  background-color ${props => props.theme.animationTiming}, transform ${props => props.theme.animationTiming};
  background-color: ${props => props.theme.primaryColorTransparent};

  svg {
    width: 100%;
    height: auto;
    fill: ${props => props.theme.primaryColor};
    cursor: pointer;
  }

  :active {
    transform: translate(2px, 2px);
  }

  @media (min-width: 960px) {
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
      background-color: ${props => props.theme.primaryColorSemiTransparent};
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
