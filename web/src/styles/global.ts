import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;

    --gray-50: #E5E5E5;
    --gray-100: #d5d5d5;
    --gray-300: #5A5566;
    --gray-400: #423D51;

    --purple-400: #5F41D9;
    --purple-800: #432E98;
    --dark-purple-900: #130C25;

    --cyan-100: #99F3F5;
    --cyan-500: #00E1E7;

    --yellow-700: #E59E37;
  }

  body, button, textarea, input {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyled;
