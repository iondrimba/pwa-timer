import React, { FC } from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../../icons/stopwatch.svg';

const Wrapper = styled.div`
  width: 135px;
  height: auto;
  margin-bottom: 30px;
  svg {
    width: 100%;
    height: auto;
    fill: #fff;
  }
`
const StopWatchIcon: FC = () => {
  return (
    <Wrapper>
      <Icon />
    </Wrapper>
  )
};

export default StopWatchIcon;