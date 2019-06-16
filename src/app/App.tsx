import React, { useState, useEffect, useContext } from 'react';
import { createBrowserHistory } from 'history';
import { GlobalStyle } from './styles';
import { Normalize } from 'styled-normalize';
import { ReactComponent as Info } from '../icons/info.svg';
import { ReactComponent as Github } from '../icons/github.svg';

import Link from '../components/Link';
import Navbar from '../components/Navbar';
import Ripple from '../components/Ripple';
import Route from './Route';
import { Ctx } from './Store';
import { secondsToMinutes } from '../helpers';

import Home from '../pages/home';
import About from '../pages/about';
import Timer from '../pages/timer';
import Config from '../pages/config';

const history = createBrowserHistory();

const App = () => {
  const context = useContext(Ctx);
  const [path, setPath] = useState(history.location.pathname);
  const [seconds, setSeconds] = useState(context.seconds);

  const unlisten = history.listen((location) => {
    setPath(location.pathname);
  });

  function onAboutClick(e: MouseEvent) {
    e.preventDefault();
    history.push('/about');
  }

  function setMinutes(minutes: number) {
    setSeconds(minutes * 60);
    context.setMinutes(secondsToMinutes(minutes * 60));
  }

  function minutesIncrease() {
    setSeconds(seconds + 60);
    context.setMinutes(secondsToMinutes(seconds + 60));
  }

  function minutesDecrease() {
    setSeconds(seconds - 60);
    context.setMinutes(secondsToMinutes(seconds - 60));
  }

  function secondsIncrease() {
    if (seconds === 59) {
      minutesIncrease();
    }

    setSeconds(seconds + 1);
  }

  function secondsDecrease() {
    if (seconds == 0) {
      minutesDecrease();
    }

    setSeconds(seconds - 1);
  }

  useEffect(() => {
    return () => {
      unlisten();
    }
  });

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Ripple />
      <Navbar>
        <Link ripple aria-label="About" onClick={onAboutClick} href="/about">
          <Info />
        </Link>
        <Link aria-label="Github" href="https://github.com/iondrimba/pwa-timer" target="_blank" rel="noopener noreferrer">
          <Github />
        </Link>
      </Navbar>
      <Ctx.Provider value={{ setMinutes, setSeconds, seconds, navigate: history.push, minutesIncrease, minutesDecrease, secondsIncrease, secondsDecrease }}>
        <Route path="/" route={path}>
          <Home />
        </Route>
        <Route path="/config" route={path}>
          <Config />
        </Route>
        <Route path="/about" route={path}>
          <About />
        </Route>
        <Route path="/timer" route={path}>
          <Timer />
        </Route>
      </Ctx.Provider>
    </>
  );
}

export default App;
