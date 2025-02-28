import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/winston-malcolm-portfolio"} replace/>} />
        <Route path='/winston-malcolm-portfolio' element={<App />} />
        <Route path="*" element={<Navigate to={"/winston-malcolm-portfolio"} replace/>} />
      </Routes>
      
    </Router>
  </StrictMode>,
)
