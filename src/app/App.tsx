import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { Normalize } from 'styled-normalize';
import { ReactComponent as Info } from '../icons/info.svg';
import { ReactComponent as Github } from '../icons/github.svg';

import IconButton from '../components/IconButton';
import Navbar from '../components/Navbar';

import Home from '../pages/home';
import About from '../pages/about';

const App: FC = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Router>
        <Navbar>
          <IconButton ariaLabel="About">
            <Info />
          </IconButton>
          <IconButton ariaLabel="Github">
            <Github />
          </IconButton>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={() => <About />} />
      </Router>
    </>
  );
}

export default App;
