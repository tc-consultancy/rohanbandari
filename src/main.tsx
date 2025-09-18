import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SmoothCursor } from './components/shared/smooth-cursor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <SmoothCursor />
  </StrictMode>,
)
