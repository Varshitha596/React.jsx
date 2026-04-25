import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './appy.jsx'
// import Page from './component/UserProfile/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
