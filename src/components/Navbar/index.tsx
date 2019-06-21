import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

  &[class^=home] {
    [data-id=close],
    h2,
    [data-id=home],
    [data-id=back] {
      display: none;
    }
  }

  &[class^=config] {
    [data-id=close],
    [data-id=home],
    [data-id=github] {
      display: none;
    }
  }

  &[class^=timer] {
    [data-id=close],
    [data-id=home],
    [data-id=github] {
      display: none;
    }
  }

  &[class^=about] {
    h2,
    [data-id=home],
    [data-id=github],
    [data-id=back],
    [data-id=info] {
      display: none;
    }
  }

  [data-id=close] {
    left: calc(100% - 48px);
  }
`;

const Navbar = (props: { children: JSX.Element | JSX.Element[], path: string }) => {
  return (
    <Nav className={props.path === ''? 'home' : props.path}>
    {
      props.children
    }
    </Nav>
  )
};

export default Navbar;
