import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle, InfoButton, GithubButton } from './styles';
import { Normalize } from 'styled-normalize';
import { ReactComponent as Info } from '../icons/info.svg';
import { ReactComponent as Github } from '../icons/github.svg';
import Home from '../pages/home';
import About from '../pages/about';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <header>
          <nav>
            <InfoButton>
              <Info />
            </InfoButton>
            <GithubButton>
              <Github />
            </GithubButton>
          </nav>
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={() => <About />} />
      </Router>
      <Normalize />
      <GlobalStyle />
    </>
  );
}

export default App;
