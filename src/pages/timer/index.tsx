import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Timer: React.FC = () => {
  return (
    <div>
      <Title>Timer</Title>
    </div>
  )
};

export default Timer;
