import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Scroll reveals only hide content once we know we can reveal it again.
if (
  typeof window !== 'undefined' &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  document.documentElement.classList.add('reveal-ready')
}

createRoot(document.getElementById('root')).render(
  
  <App />

)
