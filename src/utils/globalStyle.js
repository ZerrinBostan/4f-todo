import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;

  }

  a,
    a:hover,
    a.active,
    a:focus {
        text-decoration: none;
    }
`;

export default GlobalStyle;
