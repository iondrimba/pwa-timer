import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import App from './App';

const Button = styled.button`
  color: red;
`

it('render styled button', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
