import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../../icons/stopwatch.svg';

const StopWatchIconPose = posed.div({
  enter: {
    opacity: 1,
    y: -20,
    transition: {
      y: {
        type: 'spring',
        duration: 300,
        delay: 500
      },
      opacity: { ease: 'easeOut', duration: 300, delay: 500 },
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      opacity: { ease: 'easeOut', duration: 500 },
    }
  },
});

const Wrapper = styled(StopWatchIconPose)`
  width: 135px;
  height: auto;
  margin-bottom: 30px;

  svg {
    width: 100%;
    height: auto;
    fill: ${props => props.theme.primaryColor};
  }
`
const StopWatchIcon = (props: any) => {
  return (
    <Wrapper key="sicon" pose={props.pose}>
      <Icon />
    </Wrapper>
  )
};

export default StopWatchIcon;
