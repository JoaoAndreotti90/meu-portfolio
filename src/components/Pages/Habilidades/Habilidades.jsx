import React from 'react';
import './Habilidades.css';

const skillsData = [
  {
    category: 'Linguagens',
    items: [
      { name: 'HTML5', logo: '/icons/icons8-html-96.png' },
      { name: 'CSS3', logo: '/icons/icons8-css-96.png' },
      { name: 'JavaScript', logo: '/icons/icons8-javascript-96.png' },
      { name: 'Python', logo: '/icons/icons8-python-96.png' },
    ]
  },
  {
    category: 'Frameworks e Bibliotecas',
    items: [
      { name: 'React', logo: '/icons/icons8-reagir-96.png' },
      { name: 'Next.js', logo: '/icons/icons8-nextjs-96.png' },
      { name: 'Node.js', logo: '/icons/icons8-nodejs-96.png' },
      { name: 'Express.js', logo: '/icons/icons8-expresso-js-96.png' },
      { name: 'jQuery', logo: '/icons/icons8-jquery-96.png' },
      { name: 'Bootstrap', logo: '/icons/icons8-bootstrap-96.png' },
    ]
  },
  {
    category: 'Ferramentas e Outros',
    items: [
      { name: 'Git', logo: '/icons/icons8-git-96.png' },
      { name: 'SQL', logo: '/icons/icons8-sql-96.png' },
      { name: 'GitHub', logo: '/icons/icons8-github-96.png' },
    ]
  }
];

function Habilidades() {
  return (
    <div className="container habilidades-container">
      <h1 className="habilidades-title">Minhas Habilidades</h1>

      {skillsData.map((categoryData, index) => (
        <section key={index} className="skills-category">
          <h2 className="category-title">{categoryData.category}</h2>

          <div className="skills-grid">
            {categoryData.items.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-card-wrapper">
                <div className="skill-card">
                  <img src={skill.logo} alt={`Logo ${skill.name}`} className="skill-logo" />
                  <span className="skill-name">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Habilidades;