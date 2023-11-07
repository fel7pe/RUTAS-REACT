import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import QuienesSomos from './components/QuienesSomos'
import ProductosServicios from './components/ProductosServicios'
import Contacto from './components/Contacto'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/productos-servicios" element={<ProductosServicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;