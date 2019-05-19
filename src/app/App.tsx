import React, { FC } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { Normalize } from 'styled-normalize';
import { ReactComponent as Info } from '../icons/info.svg';
import { ReactComponent as Github } from '../icons/github.svg';

import IconButton from '../components/IconButton';
import Navbar from '../components/Navbar';

import Home from '../pages/home';
import About from '../pages/about';
import Timer from '../pages/timer';

const App: FC = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Router>
        <Navbar>
          <IconButton aria-label="About" to="/about">
            <Info />
          </IconButton>
          <IconButton aria-label="Github" to="https://github.com/iondrimba/pwa-timer" target="_blank" rel="noopener noreferrer">
            <Github />
          </IconButton>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={() => <About />} />
        <Route path="/timer" component={() => <Timer />} />
      </Router>
    </>
  );
}

export default App;
