import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import RenzoPortfolio from './RenzoPortfolio';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
      dark: '#5a67d8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RenzoPortfolio />
    </ThemeProvider>
  );
}

export default App;