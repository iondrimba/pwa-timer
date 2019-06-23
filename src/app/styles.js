import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from './theme';

const GlobalStyle = createGlobalStyle`

*, :after, :before {
  box-sizing: border-box;
}

html {
  height: 100%;
  width: 100%;
}

body {
  height: inherit;
  width: inherit;
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.primaryFont};
  background-image: linear-gradient(to top, ${props => props.theme.bgPrimaryColor} 0%, ${props => props.theme.bgSecondaryColor} 100%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button, a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  touch-action: none;
}

#root {
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
}

`
export {
  GlobalStyle,
  ThemeProvider,
  Theme,
};
