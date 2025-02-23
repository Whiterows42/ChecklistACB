import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ACBChecklist from './components/CheckLIstACB'
import EquipmentForm from './components/FirstForm'
import InspectionForm from './components/SecondForm'
import JobDoneForm from './components/ThirdForm'
import Stepper from './components/Stepper'
import { useDispatch, useSelector } from 'react-redux'
import WelcomePage from './components/WelcomePage'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>

      <WelcomePage/>


       </>
  )
}

export default App
