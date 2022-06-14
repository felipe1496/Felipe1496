import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
        scroll-behavior: smooth;
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Open Sans', sans-serif;
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


    :root {
        --dark-blue: #273042;
        --light-blue: #384051;
        --green: #00FF85;
    }
`;
