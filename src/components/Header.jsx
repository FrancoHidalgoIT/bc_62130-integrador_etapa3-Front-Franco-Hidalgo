import { useState } from 'react'; // Importa useState
import "./Header.scss";
import Navbar from "./Navbar";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Header = () => {

  const location = useLocation();


  // Determina si se debe ocultar la clase search-bar__form-search
  const hideSearchBarFormSearch = location.pathname === "/contacto" || location.pathname === "/nosotros" || location.pathname === "/carrito" || location.pathname === "/alta";

  return (
  <>
    <header className="main-header">
      <input type="checkbox" id="menu" />
      <Navbar />

      {/* <!-- search-bar --> */}
      { !hideSearchBarFormSearch && (<>
      <div className="search-bar">
          <div className="search-bar__logo-container">
            <img className='search-bar__carrito-container__img' src="public\img\cart.png" alt="" />
          </div>
          <form action="" className="search-bar__form-container">
            <label htmlFor="busqueda" className="search-bar__form-label">
              Buscar
            </label>
            <input
              type="search"
              className="search-bar__form-search"
              id="busqueda"
              placeholder="Busca productos, marcas y más..."
            />
            <input type="submit" value="Buscar" className="search-bar__form-submit" />
          </form>
          <Link className="search-bar__carrito-container" to="/carrito">
            <img className='search-bar__carrito-container__img' src="public\img\cart.png" alt="" />
          </Link>
          <div className="menu-toggle">
            <label htmlFor="menu" className="menu-toggle__label">
              <span className="menu-toggle__top-bread"></span>
              <span className="menu-toggle__meat"></span>
              <span className="menu-toggle__bottom-bread"></span>
            </label>
          </div>

      </div>
      {/* <!-- search-bar --> */}
      </>)}
      </header>
  </>
  );
};

export default Header;