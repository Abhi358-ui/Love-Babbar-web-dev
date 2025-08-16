import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Header, Navbar } from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render( // ye bol raha ha root div ko dikai

  <App />
)
