
import React from 'react';
import style from './App.module.css';
import Home from './pages/Home';
import theme from './contexts/Theme/theme';
import { ThemeProvider } from '@mui/material';




function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className={style.App}>
      <Home/>
      
      
       
      
        
       
        
       
     
    </div>
    </ThemeProvider>
  );
}

export default App;
