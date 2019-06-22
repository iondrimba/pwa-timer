import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from './theme';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'blue_highwayregular';
  src: url('./fonts/blue_highway_rg-webfont.woff2') format('woff2'),
       url('./fonts/blue_highway_rg-webfont.woff') format('woff');
  font-display: swap;
  font-weight: normal;
  font-style: normal;

}

@font-face {
  font-family: 'bebas_neueregular';
  src: url('./fonts/bebas.woff2') format('woff2'),
       url('./fonts/bebas.woff') format('woff');
  font-weight: normal;
  font-display: swap;
  font-style: normal;
}

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
  color: ${props => props.theme.main};
  font-family: ${props => props.theme.primaryFont};
  background-image: linear-gradient(to top, #62a4f7 0%, #6277f7 100%);
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
