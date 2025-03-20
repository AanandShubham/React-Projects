import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Responsive from './Test/Responsive.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Responsive />
  </StrictMode>,
)
