import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const About: React.FC = () => {
  return (
    <div>
      <Title>About</Title>
    </div>
  )
};

export default About;
