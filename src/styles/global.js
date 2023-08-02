import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;

    background-color: ${({ theme }) => theme.DARK[400]};
    color: ${({ theme }) => theme.LIGHT[300]};
  }
  
  body, input, textarea, button {
    border: none;
    outline: none;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased; 
  }

  ul {
    display: flex;
    
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: .8rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.TINTS.CAKE[100]};
  }
`;
