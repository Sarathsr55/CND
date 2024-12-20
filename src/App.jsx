import { createContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import NavBar from './Components/NavBar/NavBar'
import {GeneralReducer,initialState} from './Components/reducers/GeneralReducers'
import Contact from './Pages/Contact/Contact'

export const AppContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  const [state,dispatch] = useReducer(GeneralReducer,initialState)

  return (
    <div className='app' >
      <AppContext.Provider value={{state,dispatch}}>
      {/* <NavBar/> */}
      <Home/>
      <Contact/>
      </AppContext.Provider>
    </div>
  )
}

export default App
