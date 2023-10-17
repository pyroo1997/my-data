import { createGlobalStyles } from 'styled-components'

export const GlobalStyles = createGlobalStyles`
    :root{
        --maxWidth: 1280px
        --white : #fff;
        --lighGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    *{
        box-sizing: border-box;
    }
`;