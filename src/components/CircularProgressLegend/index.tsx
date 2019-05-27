import styled from 'styled-components';
import React from 'react';
import Legend from '../Legend';

const WrapperLegend = styled(Legend)`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
`
const CircularProgressLegend = (props: { children: JSX.Element[] }) => {
  return (
    <WrapperLegend>
      { props.children}
    </WrapperLegend>
  )
};

export default CircularProgressLegend;
