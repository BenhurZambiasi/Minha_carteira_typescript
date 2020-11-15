import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import { dark, ligth } from './styles/themes/themes';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />

    </ThemeProvider>
  )
}

export default App;
