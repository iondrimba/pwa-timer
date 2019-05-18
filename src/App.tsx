import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import './App.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App: React.FC = () => {
  return (
    <div className="App App-header">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={() => <About />} />
        </nav>
      </Router>
    </div>
  );
}

export default App;
