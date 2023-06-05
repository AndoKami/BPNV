import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header'
import Feed from './components/feed/Feed'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <Feed/>
      <Footer/>
    </>
  )
}

export default App
