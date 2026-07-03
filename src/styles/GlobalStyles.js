import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "Sirin Stencil";
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url("/fonts/sirin-stencil-latin-400-normal.woff2") format("woff2");
}

@font-face {
    font-family: "Kaushan Script";
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url("/fonts/kaushan-script-latin-400-normal.woff2") format("woff2");
}

${'' /* *{
    outline: 1px solid red !important;
}  */}

html.has-scroll-smooth {
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;  
}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}
body{
    font-family: "Sirin Stencil";
    overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}
`;

export default GlobalStyles;
