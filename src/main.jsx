import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme ({
  palette: {
    primary: {
      main: '#F1E4D9',
      second: "#F2EDE7",
      light: "#F9F6F3",
    },
    secondary: {
      main: '#495867',
      second: "#5A6775",
      light: "#697582",
    },
    text: {
      main: "#333",
      light: "#fff",
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
