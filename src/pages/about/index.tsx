import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const About = () => {
  return (
    <div className="content">
      <Title>PWA React Music Player</Title>
      <p>This is a personal project built in my spare time for learning purposes.</p>
      <h2>Credits:</h2>
    </div>
  )
};

export default About;
