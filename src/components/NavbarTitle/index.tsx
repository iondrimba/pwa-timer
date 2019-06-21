import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  text-transform: capitalize;
`;


const NavbarTitle = (props: { title: string }) => {
  return (
    <Title>{props.title}</Title>
  )
};

export default NavbarTitle;
