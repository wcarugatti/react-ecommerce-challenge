import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  :root {
    /* --primary: #35c600; */
    /* --secondary: #d6ffc8; */
    /* --primary: 	#8ab446; */
    /* --secondary: #acc864; */
    --primary: 	#92a65f;
    --secondary: #dcde9f;
    --red: red;
    --white: #f3f4d3;
    --text: #555555;
    --lighttext: #a5aebc;
    --lightgray: #dfdfdf;
    --lightwhite: #fff;

    --shadow1: 0 0.9px 1.5px rgba(0, 0, 0, 0.03),
    0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12);

    --sidebar-size: 370px;
  }

  body{
    background-color: var(--secondary);
  }

`;
