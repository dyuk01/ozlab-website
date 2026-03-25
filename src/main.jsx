import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import './index.css'

// Vite `base`와 동일 (GitHub Pages는 /repo-name/ 형태)
const routerBasename =
  (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || undefined

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
