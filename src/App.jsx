import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Apps from './pages/Apps';
import AppDetails from './pages/AppDetails';
import Installation from './pages/Installation';


function AppContent() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/:id" element={<AppDetails />} />
            <Route path="/installation" element={<Installation />} />
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
