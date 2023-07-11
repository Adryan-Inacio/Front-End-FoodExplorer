import { createGlobalStyle } from 'styled-components'

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
        background-color: ${({ theme }) => theme.COLORS.dark_400};
        color: ${({ theme }) => theme.COLORS.light_100};

        -webkit-font-smoothing: antialiased;    
    }

    body, input, textarea {
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.COLORS.light_100};
        font-size: 1.6rem;
        outline: none;
    }

    input, select, textarea {
        border: none;
    }

    

    button {
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        cursor: pointer;
        border: none;
        background: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.8);
    }
`
