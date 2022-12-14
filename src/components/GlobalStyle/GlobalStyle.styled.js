import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  p {
    margin: 0;
    padding: 0;
  }
  img {
    display: block;
    max-width: ${p => p.theme.widthes.widthImg};
    height: auto;
  }
  ul,
  ol {
    list-style: none;
  }
`;

export default GlobalStyle;
