import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    width: 100%;
    height: 100vh;
    background-color: #e7e7e7;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;