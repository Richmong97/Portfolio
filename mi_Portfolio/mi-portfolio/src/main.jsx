// Archivo src/index.jsx o src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';  // Importa desde react-dom/client
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';

const theme = createTheme();
const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
