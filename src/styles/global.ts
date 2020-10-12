import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';



declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    title: string;
    text: string;
    translate: string;
    button: string;
  }
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.background}
  }


  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .theme-switch {
    color: #000;
    width: 70px;
    height: 30px;
    border-radius: 50px;
    position: relative;
    background: ${props => props.theme.button};

    .switch {
      background: white;
      border-radius: 100%;
      position: absolute;
      width: 24px;
      height: 24px;
      top: 3px;
      left: 4px;
      transition: 0.5s all ease;
      transform: translateX(${props => props.theme.translate});
    }
  }
`;
