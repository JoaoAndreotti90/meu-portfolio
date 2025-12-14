import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    setIsNavCollapsed(true); 
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  return (
    <nav className="navbar navbar-expand-md fixed-top bg-white">
      <div className="container-fluid">
        <div className="flex-grow-1 d-md-none"></div>
        
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="meuNavbar"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-md-center justify-content-lg-between`} id="meuNavbar">
          <ul className="navbar-nav mb-2 mb-lg-0 text-end text-md-center">
            
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={(e) => handleClick(e, '#home')}>Inicio</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#projetos" onClick={(e) => handleClick(e, '#projetos')}>Projetos</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#habilidades" onClick={(e) => handleClick(e, '#habilidades')}>Habilidades</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#certificacoes" onClick={(e) => handleClick(e, '#certificacoes')}>Certificações</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#contato" onClick={(e) => handleClick(e, '#contato')}>Contato</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;