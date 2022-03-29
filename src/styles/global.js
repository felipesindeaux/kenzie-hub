import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --success: #3FE864;
        --negative: #E83F5B;
        --toastify-icon-color-error: #E83F5B;
        --toastify-color-progress-error: #E83F5B;
        --toastify-icon-color-success: #3FE864;
        --toastify-color-progress-success: #3FE864;
        --toastify-text-color-light: #F8F9FA;
        --toastify-color-light: #343B41;
        --toastify-font-family: 'Inter';
    }

    body{
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
