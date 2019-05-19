import React, { FC } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

interface NavProps {
  children?: JSX.Element[],
}

const Navbar: FC<NavProps> = (props: NavProps) => {
  return (
    <Nav>{props.children}</Nav>
  )
};

export default Navbar;
