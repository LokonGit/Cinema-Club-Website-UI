import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import CineBot from './components/CineBot'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Gallery />
      <CineBot />
      <Footer />
    </div>
  )
}

export default App
