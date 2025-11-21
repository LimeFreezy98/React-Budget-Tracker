import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { GlowProvider } from './context/GlowContext.jsx';
import { GradientProvider } from './context/GradientContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <GlowProvider>
      <GradientProvider>
    <App />
     </GradientProvider>
     </GlowProvider>
    </ThemeProvider>
  </StrictMode>,
)
