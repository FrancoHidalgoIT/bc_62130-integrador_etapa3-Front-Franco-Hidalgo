// Footer.jsx

import React from 'react';
import './Footer.scss'; // Importa el archivo CSS

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} TopSoftSolutions Web Develops <sup>tm</sup> <br /> Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

