import React from 'react';
import './Certification.css';
import CertificateItem from './CertificateItem';

const certificatesData = [

  { id: 1, title: 'Fundamentos Web', imageSrc: '/certification/Fundamentos Web.jpeg', description: 'Neste curso, aprendi os conceitos essenciais de HTML, CSS e JavaScript, a base para o desenvolvimento web front-end.' },
  { id: 2, title: 'Desenvolvimento Web Moderno', imageSrc: '/certification/Web Moderno.jpeg', description: 'Aprimorei meus conhecimentos anteriores e explorei novas ferramentas, frameworks e bibliotecas do ecossistema web atual.' },
  { id: 3, title: 'JavaScript Avançado', imageSrc: '/certification/JS.jpeg', description: 'Aprofundei meus conhecimentos em JavaScript, explorando técnicas avançadas, padrões de projeto e as últimas funcionalidades da linguagem.' },
  { id: 4, title: 'Introdução ao Python', imageSrc: '/certification/Python.jpeg', description: 'Aprendi os conceitos básicos da linguagem Python, incluindo sintaxe, tipos de dados e estruturas de controle.' },
  { id: 5, title: 'Programação Orientada a Objetos (Java)', imageSrc: '/certification/POO.jpeg', description: 'Estudei os princípios da Programação Orientada a Objetos utilizando a linguagem Java como base.' },
  { id: 6, title: 'React Essencial e Avançado', imageSrc: '/certification/React.jpeg', description: 'Aprofundei meus conhecimentos no framework React, desde os conceitos fundamentais até tópicos mais avançados para construção de interfaces.' }
];

function Certification() {
  return (
    <div className="container certification-container">
      <h1 className="certification-title">Minhas Certificações</h1>
      <div className="certificates-grid">
        {certificatesData.map((cert) => (
          <CertificateItem key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
}

export default Certification;