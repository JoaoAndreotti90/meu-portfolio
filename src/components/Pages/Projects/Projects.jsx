import React, { useState } from 'react'; 
import './Projects.css';

const allProjectsData = [
  {
    id: 1,
    title: "JobFinder",
    description: "Um site de busca de emprego completo, com front-end em React e integração com backend.",
    imageUrl: "/sites/site1.png",
    siteUrl: "https://job-search-dev.netlify.app/",
    githubUrl: "#",
    tags: ["React", "Node.js", "CSS"],
    category: "React" 
  },
  {
    id: 2,
    title: "Projeto HTML/CSS", 
    description: "Um clone de website estático feito puramente com HTML5 e CSS3, focado em design responsivo.",
    imageUrl: "/sites/site1.png", 
    siteUrl: "#",
    githubUrl: "#", 
    tags: ["HTML", "CSS"],
    category: "HTML/CSS" 
  },
  {
    id: 3,
    title: "Calculadora React", 
    description: "Uma calculadora funcional construída com React, utilizando State e Effects para gerenciar os cálculos.",
    imageUrl: "/sites/site1.png", 
    siteUrl: "#",
    githubUrl: "#", 
    tags: ["React", "JavaScript"],
    category: "React" 
  }
];



const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos'); 
  const filteredProjects = allProjectsData.filter(project => {
    if (activeFilter === 'Todos') {
      return true; 
    }
    return project.category === activeFilter; 
  });

  return (
    <section className="projects-section">
      
      <h2 className="projects-section-title">Meus Projetos</h2>
      
      <div className="project-filters">
        <button 
          className={`filter-btn ${activeFilter === 'Todos' ? 'active' : ''}`}
          onClick={() => setActiveFilter('Todos')}
        >
          Todos
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'React' ? 'active' : ''}`}
          onClick={() => setActiveFilter('React')}
        >
          React
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'HTML/CSS' ? 'active' : ''}`}
          onClick={() => setActiveFilter('HTML/CSS')}
        >
          HTML/CSS
        </button>
      </div>
      
      <div className="projects-grid">
        
        {filteredProjects.map((project) => (
          
          <div key={project.id} className="project-card">
            
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            
            <div className="project-content">
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.siteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gradient"
                >
                  Ver Site
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-gradient"
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        ))}
        
      </div> 
    </section>
  );
}

export default Projects;
