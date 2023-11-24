// Footer.jsx

import React from 'react';
import './Footer.scss'; // Importa el archivo CSS
import { useLocation } from 'react-router';


const Footer = () => {

  const location = useLocation();


  // Determina si se debe ocultar el footer
  const hideFooter = location.pathname === "/contacto" || location.pathname === "/nosotros" || location.pathname === "/alta";

  return (
    <>
   { !hideFooter && (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} TopSoftSolutions Web Develops <sup>tm</sup> <br /> Todos los derechos reservados.</p>
      </div>
    </footer>)}
   
    </>
  );
};

export default Footer;

