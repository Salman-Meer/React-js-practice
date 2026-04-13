import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import App2 from './assets/app2.jsx'
import States_app from './states_app.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
    <App name="salman" message="Hello, World!" />
    <App2 name="roman" message="Hello, World! from roman" />
    <States_app/>
  </StrictMode>,
  </>
)
