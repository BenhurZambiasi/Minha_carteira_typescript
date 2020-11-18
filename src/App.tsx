import React from 'react';
import { ThemeProvider } from 'styled-components'
import { dark, ligth } from './styles/themes/themes';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';



const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App;
