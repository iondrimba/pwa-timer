import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1em;
`;

const Subtitle = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

const Ul = styled.ul `
  list-style: none;
  padding: 0;

  li {
    font-size: 20px;
    margin-bottom: 5px;
  }

  label {
    font-size: 18px;
  }

  a {
    color: #fff;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

interface ICredits {
  label: string,
  link: string,
  author: string,
}

const credits: ICredits[] = [{
  label: 'Design Inspired by',
  link: 'https://dribbble.com/shots/5932203-Daily-UI-014-Countdown-Timer',
  author: 'Natsumi Nakajima // nanome',
},
{
  label: 'Replay icon by',
  link: 'https://www.flaticon.com/authors/chanut',
  author: 'Chanut',
},
{
  label: 'Stop icon by',
  link: 'https://www.flaticon.com/authors/egor-rumyantsev',
  author: 'Egor Rumyantsev',
},
{
  label: 'Play icon by',
  link: 'https://www.flaticon.com/free-icon/media-play-symbol_31128',
  author: 'Freepik',
},
{
  label: 'Pause icon by',
  link: 'https://www.flaticon.com/free-icon/pause_149659#term=pause&page=1&position=11',
  author: 'Smashicons',
},
{
  label: 'Timer icon by',
  link: 'https://www.flaticon.com/free-icon/stopwatch_1078010#term=timer&page=1&position=67',
  author: 'Freepik',
},
{
  label: 'Blue Highway (font) by',
  link: 'https://www.dafont.com/typodermic.d1705',
  author: 'Ray Larabie',
},
{
  label: 'Bebas Neue (font) by',
  link: 'https://www.dafont.com/ryoichi-tsunekawa.d2733',
  author: 'Ryoichi Tsunekawa',
}];

const About = () => {
  return (
    <Wrapper>
      <header><Title>PWA Timer</Title></header>
      <Paragraph>This is a personal project built in my spare time for learning purposes.</Paragraph>
      <Subtitle>Credits:</Subtitle>
      <Ul>
        {
          credits.map(credit => {
            return (
              <li>
              <label >{credit.label} </label>
              <a tabIndex={0} target="_blank" rel="noopener noreferrer" href={credit.link}>{credit.author}</a>
            </li>
            )
          })
        }

      </Ul>
    </Wrapper>
  )
};

export default About;
