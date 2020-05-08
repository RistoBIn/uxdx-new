import { createGlobalStyle } from 'styled-components'
export const HeadFont = 'Oswald'
export const BodyFont = 'Roboto Condensed'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: ${BodyFont}, sans-serif;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  h3 {
    paddingBottom: '2rem'
  }

  button {
    cursor: pointer;
  }

  img[alt=""],
  img:not([alt]) {
    border: 5px dashed #c00;
  }
`
