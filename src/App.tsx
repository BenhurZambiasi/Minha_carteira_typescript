import React from 'react';
import { ThemeProvider } from 'styled-components'
import { dark, ligth } from './styles/themes/themes';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import List from './pages/List';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout >
        <List />
      </Layout>

    </ThemeProvider>
  )
}

export default App;
