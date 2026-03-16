import { useState } from 'react'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import Home from './pages/Home'


function AppContent() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      <Footer />
    </>
  );
}

function App() {

  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  )
}

export default App
