import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound';


function AppContent() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
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
