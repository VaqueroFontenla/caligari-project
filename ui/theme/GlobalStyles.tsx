import { createGlobalStyle } from "styled-components";
import { font } from ".";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }

  html, body {
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;

    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;

    height: 100%;
  }

  body {
    height: 100%;

    ${font.base};
    -webkit-font-smoothing: antialiased;

  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyle;
