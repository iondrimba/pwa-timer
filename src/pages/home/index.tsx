import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { Ctx } from '../../app/Store';
import StopWatchIcon from './stopWatch';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import PlayPauseButton from '../../components/PlayPauseButton';

const PlayIcon = styled(Play)`
  margin-left: 4px;
`

const TitlePose = posed.h1({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        type: 'spring',
        duration: 200,
        delay: 200
      },
      opacity: { ease: 'easeOut', duration: 300, delay: 300 },
    }
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      opacity: { ease: 'easeOut', duration: 300 },
    }
  },
});

const Title = styled(TitlePose)`
  font-size: 1.5em;
  text-align: center;
  margin: 0;
  font-weight: normal;
`;


const Wrapper = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 0;
`;

const Next = styled(PlayPauseButton)`
  margin-top: 50px;
`

const Home = () => {
  const { navigate } = useContext(Ctx);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => {
    };
  }, []);

  return (
    <Wrapper>
      <StopWatchIcon key="StopWatchIcon" pose={visible? 'enter': 'exit'} />
      <PoseGroup>
        {visible &&
          [
            <Title key="Title">PWA Timer</Title>,
            <Next key="Next" type="button" onClick={() => navigate('/config')} aria-label="Configure timer">
              <PlayIcon />
            </Next>
          ]
        }
      </PoseGroup>
    </Wrapper>
  )
};

export default Home;
