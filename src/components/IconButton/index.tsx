import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
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
`;

interface ButtonProps {
  ariaLabel: string,
  children: JSX.Element,
}

const IconButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <Button aria-label={props.ariaLabel} type="button">{props.children}</Button>
  )
};

export default IconButton;
