import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <div className="flex-grow-1 d-md-none"></div>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#meuNavbar"
          aria-controls="meuNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center justify-content-lg-between" id="meuNavbar">
          <ul className="navbar-nav mb-2 mb-lg-0 text-end text-md-center">
            
            <li className="nav-item">
              <a className="nav-link" href="#home">Inicio</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#projetos">Projetos</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#habilidades">Habilidades</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#certificacoes">Certificações</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#contato">Contato</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;