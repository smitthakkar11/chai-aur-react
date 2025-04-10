import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



/* 
:::::::::::::::::::::::::NOTES::::::::::::::::::::::::
this is state management demo
used through:
context api
redux
redux tool kit (RTK)
helps in making include transfer of a particular thing direct , not by mentioning above classes 



*/