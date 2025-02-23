import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './store.js'
import { Provider } from 'react-redux'
import ACBChecklist from './components/CheckLIstACB.jsx'
import Stepper from './components/Stepper.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path='/checklistform' element={<Stepper/>} />
      <Route path='/final' element={<ACBChecklist/>} />
    </Routes>
  </BrowserRouter>

   </Provider>
  </StrictMode>,
)
