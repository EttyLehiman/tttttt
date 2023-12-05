import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './component/show.css'
import './App.css'



// import { workers } from './data/workers';
// import { cost } from './data/costumers';
import { Header } from './component/header.component';
import { Workers } from './component/workers.component';
import { Costumers } from './component/costumer.component';
import React from 'react';
function App() {
  

  return (
    <>
    <Header/>
    <Workers/>
    <Costumers/>
    </>
  )
}

export default App
