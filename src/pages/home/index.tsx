import React, { useContext, useEffect, useState } from 'react';
import { Spring, config } from 'react-spring/renderprops'
import styled from 'styled-components';
import { Ctx } from '../../app/Store';
import StopWatchIcon from './StopWatch';
import { ReactComponent as Play } from '../../icons/media-play.svg';
import PlayPauseButton from '../../components/PlayPauseButton';

const PlayIcon = styled(Play)`
  margin-left: 4px;
`
const Title = styled.h1`
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

  function outro() {
    navigate('/config');
  }

  return (
    <Wrapper>
      <Spring config={{ tension: 180, friction: 12 }} from={{
        opacity: 0,
        transform: 'translateY(100px)'
      }}
        to={{
          opacity: 1,
          transform: 'translateY(0)',
        }}>
        {props =>
          <StopWatchIcon style={props} key="StopWatchIcon" />
        }
      </Spring >

      <Spring config={{ delay: 100, tension: 180, friction: 12 }} from={{
        opacity: 0,
        transform: 'translateY(100px)'
      }}
        to={{
          opacity: 1,
          transform: 'translateY(0)',
        }}>
        {props => <Title style={props} key="Title">PWA Timer</Title>}
      </Spring >
      <Spring config={{ delay: 200, tension: 180, friction: 12 }} from={{
        opacity: 0,
        transform: 'translateY(100px)'
      }}
        to={{
          opacity: 1,
          transform: 'translateY(0)',
        }}>
        {props =>
          <Next key="Next" style={props} type="button" onClick={() => outro()} aria-label="Configure timer">
            <PlayIcon />
          </Next>
        }
      </Spring >

    </Wrapper>
  )
};

export default Home;
