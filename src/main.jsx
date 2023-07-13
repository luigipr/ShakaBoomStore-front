import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './styles/ResetStyle'
import GlobalStyle from './styles/GlobalStyle'
import { TokenProvider } from './contexts/tokenContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenProvider>
    <ResetStyle />
    <GlobalStyle />
    <App />
    </TokenProvider>
  </React.StrictMode>
)
