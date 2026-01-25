// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import 'devicon/devicon.min.css'
import { Home, About, Contact, Portofolio } from './pages'
import { Main } from './components'

function App() {
  return (
    <Main>
      <Home />
      <About />
      <Contact />
      <Portofolio />
    </Main>
  )
}

export default App
