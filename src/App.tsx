// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'devicon/devicon.min.css'
import { Home, Contact, Portofolio, Activity } from './pages'
import { Main } from './components'

function App() {
  return (
    <Main>
      <Home />
      <Portofolio />
      <Activity />
      <Contact />
    </Main>
  )
}

export default App
