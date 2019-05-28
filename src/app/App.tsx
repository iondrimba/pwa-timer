import React, { useState, useEffect, createContext } from 'react';
import { createBrowserHistory } from 'history';
import { GlobalStyle } from './styles';
import { Normalize } from 'styled-normalize';
import { ReactComponent as Info } from '../icons/info.svg';
import { ReactComponent as Github } from '../icons/github.svg';

import Link from '../components/Link';
import Navbar from '../components/Navbar';
import Route from './Route';

import Home from '../pages/home';
import About from '../pages/about';
import Timer from '../pages/timer';
import Config from '../pages/config';

const history = createBrowserHistory();

const state: IData = {
  minutes: 0,
  seconds: 0,
  setMinutes: (min: number) => { state.minutes = min; },
  setSeconds: (sec: number) => { state.seconds = sec; }
}

export interface IData {
  minutes: number,
  seconds: number
  setMinutes(min: number): void,
  setSeconds(sec: number): void,
}

export const Ctx = createContext(state);

const App = () => {
  const [path, setPath] = useState(history.location.pathname);
  const unlisten = history.listen((location) => {
    setPath(location.pathname);
  });

  function onAboutClick(e: MouseEvent) {
    e.preventDefault();
    history.push('/about');
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
      <Navbar>
        <Link aria-label="About" onClick={onAboutClick} href="/about">
          <Info />
        </Link>
        <Link aria-label="Github" href="https://github.com/iondrimba/pwa-timer" target="_blank" rel="noopener noreferrer">
          <Github />
        </Link>
      </Navbar>
      <Ctx.Provider value={state}>
        <Route path="/" route={path} component={Home} navigate={ history.push }/>
        <Route path="/about" route={path} component={About}  navigate={ history.push }/>
        <Route path="/config" route={path} component={Config}  navigate={ history.push }/>
        <Route path="/timer" route={path} component={Timer}  navigate={ history.push }/>
      </Ctx.Provider>
    </>
  );
}

export default App;
