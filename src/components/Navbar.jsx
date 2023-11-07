import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/quienes-somos" className="nav-link">Quiénes Somos</Link>
          </li>
          <li className="nav-item">
            <Link to="/productos-servicios" className="nav-link">Productos y Servicios</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;