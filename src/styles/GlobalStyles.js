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
    --green: #35c600;
    --lightgreen: #d6ffc8;
    --red: red;
    --white: #fff;
    --text: #555555;
    --lighttext: #a5aebc;
    --lightgray: #dfdfdf;

    --shadow1: 0 0.9px 1.5px rgba(0, 0, 0, 0.03),
    0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12);

    --sidebar-size: 370px;
  }
`;
