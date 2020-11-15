import { DefaultTheme } from 'styled-components'

const dark: DefaultTheme = {
  title: 'dark',

  colors: {
    primary: "#1b1f38",
    secondary: "#252A48",
    tertiary: "#313862",
    white: '#fff',
    black: '#000',
    gray: "#bfbfbf",
    sucess: "#4e41f0",
    info: '#f7931b',
    warning: '#e44c4e',
  }
}

const ligth: DefaultTheme = {
  title: 'ligth',

  colors: {
    primary: "#dcdcdc",
    secondary: "#fff",
    tertiary: "#f5f5f5",


    white: '#000',
    black: '#fff',
    gray: '#bfbfbf',

    sucess: '#03bb85',
    info: '#3b5998',
    warning: '#e44c4e',
  }
}


export { dark, ligth };
