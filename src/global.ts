import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --primary-color: #6610F2;
        --secondary-color: #741FFF;
        --primary-background-color: #0A0B1C;
        --secondary-background-color: #181832;
        --white: #FAFAFA;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        box-sizing:  border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
        margin: 0;
        padding: 0;
        background-color: var(--primary-background-color);
    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
        font-family: 'Nunito', sans-serif;
    }
`