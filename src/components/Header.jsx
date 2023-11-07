import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Tu Título</h1>
      <Link to="/">Inicio</Link>
    </header>
  );
}

export default Header;