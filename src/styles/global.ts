import { createGlobalStyle } from "styled-components";
import Bkg1 from '../assets/Ellipse2.svg';

const globalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #F7F7F9;
    background-image: url(${Bkg1});
    background-repeat: no-repeat;
    background-position: 950px;
    background-size: cover;
    font-family: 'Poppins', sans-serif;
  }

  button {
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    outline: none;
  }
`;


export default globalStyle;