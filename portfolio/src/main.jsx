import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CleanBeaks from './CleanBeaks.jsx'
import SpeedyMemory from './SpeedyMemory.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/clean-beaks" element={<CleanBeaks />} />
        <Route path="/speedy-memory" element={<SpeedyMemory />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
