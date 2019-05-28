import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'blue_highwayregular';
  src: url('./fonts/blue_highway_rg-webfont.woff2') format('woff2'),
       url('./fonts/blue_highway_rg-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}

@font-face {
  font-family: 'bebas_neueregular';
  src: url('./fonts/bebas.woff2') format('woff2'),
       url('./fonts/bebas.woff') format('woff');
  font-weight: normal;
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
  color: #fff;
  font-family: 'blue_highwayregular';
  font-display: swap;
  background-image: linear-gradient(to top,#62a4f7 0%,#6277f7 100%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button, a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

main#root {
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
};
