import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        background: ${({ theme }) => theme.appBackground};
        color: ${({ theme }) => theme.appColor};
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }

    h1, h2, p, ul, li {
        margin: 0;
        padding: 0;
    }
`
