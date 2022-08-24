import React from 'react';
import theme from './contexts/Theme/theme';
import { ThemeProvider } from '@mui/material';
import Rotas from './rotas';





function App() {
  return (
    <ThemeProvider theme={theme}>
      < Rotas />
    </ThemeProvider>
  );
}

export default App;
