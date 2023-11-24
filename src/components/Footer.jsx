// Footer.jsx

import React from 'react';
import './Footer.scss'; // Importa el archivo CSS

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} FAHWebDevelopers <sup>tm</sup> <br /> Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

