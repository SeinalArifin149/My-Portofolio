// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Home } from'./pages/home/home'
import { Home,About,Contact,Portofolio } from'./pages'
import { Main } from './components'
import 'devicon/devicon.min.css'
function App() {

  return (
    <>
    <Main>
    <Home />

    <Portofolio/>
    {/* <About/>
    <Contact/> */}

    </Main>
  
    </>
  )
}

export default App
