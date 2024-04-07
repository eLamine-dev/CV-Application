import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import App from './App';
import './styles/reset.css';
import './styles/index.css';

// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//    palette: {
//       primary: {
//          main: '#64748b',
//       },
//       test: {
//          main: '#f8fafc',
//       },
//    },
// });

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
