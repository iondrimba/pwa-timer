import React from 'react';
import styled, { css } from 'styled-components';

const LinkStyled = styled.a`
background: none;
border: none;
width: 48px;
height: 48px;
padding: 10px;
cursor: pointer;

svg {
  width: 100%;
  height: auto;
  fill: #fff;
  cursor: pointer;
}
`
const IconButton = (props: any) => {
  return (
    <LinkStyled {...props} >{props.children}</LinkStyled>
  )
};

export default IconButton;