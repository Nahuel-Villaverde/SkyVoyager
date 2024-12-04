import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MainPage from './components/MainPage.jsx'; // Importa el nuevo componente
import Reserve from './components/Reserve.jsx';
import Materials from './components/Materials.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'; // Importa el componente ScrollToTop
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS con duración de 1s
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Agrega el ScrollToTop */}
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Renderiza la página principal */}
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/materials" element={<Materials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
