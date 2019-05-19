import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'blue_highwaybold';
  src: url('./fonts/blue_highway_bd-webfont.woff2') format('woff2'),
       url('./fonts/blue_highway_bd-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}

@font-face {
  font-family: 'blue_highwaycondensed';
  src: url('./fonts/blue_highway_cd-webfont.woff2') format('woff2'),
       url('./fonts/blue_highway_cd-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}

@font-face {
  font-family: 'blue_highwayd';
  src: url('./fonts/blue_highway_d-webfont.woff2') format('woff2'),
       url('./fonts/blue_highway_d-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'blue_highwaylinocut';
  src: url('./fonts/blue_highway_linocut-webfont.woff2') format('woff2'),
       url('./fonts/blue_highway_linocut-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}

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
  background-image: linear-gradient(to top,#62a4f7 0%,#6277f7 100%);
}

main#root {
  display: flex;
  flex-direction: column;
  height: inherit;
  justificy-content: center;
  align-items: center;
  padding: 20px;
}
`
export {
  GlobalStyle,
};
