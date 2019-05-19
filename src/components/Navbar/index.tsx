import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Navbar = (props: any) => {
  return (
    <Nav>{props.children}</Nav>
  )
};

export default Navbar;
