import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Apps from './pages/Apps';
import AppDetails from './pages/AppDetails';
import Installation from './pages/Installation';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import { Toaster } from 'react-hot-toast';


function AppContent() {

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
    {loading && <LoadingScreen />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.3s ease' }}>
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
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '10px',
            background: '#0F172A',
            color: '#fff',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '14px',
          },
          success: {
            iconTheme: { primary: '#10B981', secondary: '#fff' },
          },
          error: {
            iconTheme: { primary: '#EF4444', secondary: '#fff' },
          },
        }}
      />
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
