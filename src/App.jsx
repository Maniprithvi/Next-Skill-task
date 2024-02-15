import React from 'react'

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import './App.css'
const App = () => {
  return (
    <div className='w-full  mr-5 ml-5 overflow-hidden'>
      <NavBar />
      <Home />
      <Footer />
    </div>
  )
}

export default App