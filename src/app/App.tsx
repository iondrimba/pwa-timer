import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { GlobalStyle } from './styles';
import { Normalize } from 'styled-normalize';
import { ReactComponent as Info } from '../icons/info.svg';
import { ReactComponent as Github } from '../icons/github.svg';

import IconButton from '../components/IconButton';
import Navbar from '../components/Navbar';

import Home from '../pages/home';
import About from '../pages/about';
import Timer from '../pages/timer';
import Config from '../pages/config';

const history = createBrowserHistory();

function RouteMatch(path: string, route: string, Component: any): any {
  if (path === route) {
    return <Component navigate={history.push} />;
  }
  return null;
}

const App: FC = () => {
  const [path, setPath] = useState('');
  const unlisten = history.listen((location) => {
    setPath(location.pathname);
  });

  function onAboutClick() {
    setPath('/about');
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
      <Router>
        <Navbar>
          <IconButton aria-label="About" to="/about" onClick={onAboutClick}>
            <Info />
          </IconButton>
          <IconButton aria-label="Github" to="https://github.com/iondrimba/pwa-timer" target="_blank" rel="noopener noreferrer">
            <Github />
          </IconButton>
        </Navbar>
        {RouteMatch("/", path, Home)}
        {RouteMatch("/about", path, About)}
        {RouteMatch("/config", path, Config)}
        {RouteMatch("/timer", path, Timer)}
      </Router>
    </>
  );
}

export default App;
