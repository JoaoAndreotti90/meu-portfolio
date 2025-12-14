import React from 'react';
import './Footer.css';

function Footer() {

  const handleScroll = (e, targetId) => {
    e.preventDefault(); 
    const element = document.querySelector(targetId);
    if (element) {
      // Pula direto para a seção (sem animação)
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  return (
    <>
      <footer className="footer-mobile shadow-lg d-md-none">
        <div className="container-fluid h-100">
          <nav className="d-flex justify-content-around align-items-center h-100">
            
            <a href="#home" className="footer-link" onClick={(e) => handleScroll(e, '#home')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2c-0.26712,0.00003 -0.52312,0.10694 -0.71094,0.29688l-10.08594,8.80078c-0.12774,0.09426 -0.20313,0.24359 -0.20312,0.40234c0,0.27614 0.22386,0.5 0.5,0.5h2.5v8c0,0.552 0.448,1 1,1h4c0.552,0 1,-0.448 1,-1v-6h4v6c0,0.552 0.448,1 1,1h4c0.552,0 1,-0.448 1,-1v-8h2.5c0.27614,0 0.5,-0.22386 0.5,-0.5c0.00001,-0.15876 -0.07538,-0.30808 -0.20312,-0.40234l-10.08008,-8.79492c-0.00194,-0.00196 -0.0039,-0.00391 -0.00586,-0.00586c-0.18782,-0.18994 -0.44382,-0.29684 -0.71094,-0.29687z"></path>
              </svg>
              <span>Inicio</span>
            </a>

            <a href="#projetos" className="footer-link" onClick={(e) => handleScroll(e, '#projetos')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 50 50">
                <path d="M 3 4 C 1.347656 4 0 5.347656 0 7 L 0 33.09375 C 1.464844 25.296875 3.105469 16.550781 3.1875 16.125 C 3.695313 13.535156 5.648438 12 8.4375 12 L 47 12 L 47 11 C 47 9.347656 45.652344 8 44 8 L 18.03125 8 C 17.753906 7.898438 17.183594 6.992188 16.875 6.5 C 16.105469 5.273438 15.316406 4 14 4 Z M 8.4375 14 C 7.15625 14 5.5625 14.449219 5.15625 16.53125 C 5.027344 17.179688 1.132813 37.910156 0 43.9375 L 0 44 C 0 45.652344 1.347656 47 3 47 L 42 47 C 43.621094 47 44.945313 45.703125 45 44.09375 L 49.96875 17.1875 L 50 17 C 50 15.347656 48.652344 14 47 14 Z"></path>
              </svg>
              <span>Projetos</span>
            </a>

            <a href="#habilidades" className="footer-link" onClick={(e) => handleScroll(e, '#habilidades')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311a1.464 1.464 0 0 1-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413-1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.858 2.929 2.929 0 0 1 0 5.858"/>
              </svg>
              <span>Habilidades</span>
            </a>

            <a href="#certificacoes" className="footer-link" onClick={(e) => handleScroll(e, '#certificacoes')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
              </svg>
              <span>Certificações</span>
            </a>

            <a href="#contato" className="footer-link" onClick={(e) => handleScroll(e, '#contato')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
              </svg>
              <span>Contato</span>
            </a>

          </nav>
        </div>
      </footer>

      <footer className="footer-desktop d-none d-md-block">
        <div className="container text-center py-4">
          <p className="mb-0">&copy; 2025 João Andreotti.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;