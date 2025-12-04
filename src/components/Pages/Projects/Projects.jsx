import React, { useState } from 'react'; 
import './Projects.css';

const allProjectsData = [
  {
    id: 11,
    title: "Estoque",
    description: "Desenvolvi este projeto para treinar a criação de interfaces responsivas apenas com Tailwind CSS. O desafio foi abandonar componentes prontos e estilizar cada elemento manualmente para entender o poder das classes utilitárias.",
    imageUrl: "/sites/site12.png",
    siteUrl: "https://estoque-git-main-joao-andreottis-projects.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/estoque",
    tags: ["React", "Tailwind CSS"],
    category: "React" 
  },
  {
    id: 11,
    title: "TaskFlow",
    description: "O TaskFlow centraliza a organização de múltiplos projetos em dashboards exclusivos, eliminando a desordem com quadros Kanban interativos e gestão visual de equipes em tempo real.",
    imageUrl: "/sites/site11.png",
    siteUrl: "https://taskflow-sepia-psi.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/taskflow",
    tags: ["React", "Supabase", "CSS", "Full-Stack"],
    category: "React" 
  },
  {
    id: 10,
    title: "AuraPro",
    description: "Landing Page responsiva e moderna desenvolvida com React e CSS puro (sem frameworks), com foco em UI Design e experiência do usuário.",
    imageUrl: "/sites/site10.png",
    siteUrl: "https://aura-pro-sigma.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/AuraPro",
    tags: ["React", "CSS"],
    category: "React" 
  },
  {
    id: 9,
    title: "DoutorCerto",
    description: "Plataforma completa de agendamento médico que conecta pacientes a especialistas.",
    imageUrl: "/sites/site9.png",
    siteUrl: "https://doutor-certo.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/DoutorCerto",
    tags: ["React", "Supabase", "CSS", "Full-Stack"],
    category: "React" 
  },
  {
    id: 1,
    title: "PixelFeed",
    description: "Uma rede social de fotos completa, com login, curtidas e comentários. Usa React para o front-end e se comunica com um backend.",
    imageUrl: "/sites/site2.png",
    siteUrl: "https://pixel-feed-peach.vercel.app/login",
    githubUrl: "https://github.com/JoaoAndreotti90/PixelFeed",
    tags: ["React", "Supabase", "CSS", "Full-Stack"],
    category: "React" 
  },
  {
    id: 2,
    title: "Mini Blog", 
    description: "Uma aplicação para criar e postar artigos simples, com foco no uso de React para gerenciar o conteúdo e a navegação.",
    imageUrl: "/sites/site3.png", 
    siteUrl: "https://mini-blog-kappa-beryl.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/Mini-blog", 
    tags: ["React", "Supabase", "CSS", "Full-Stack"],
    category: "React" 
  },
  {
    id: 3,
    title: "Portfólio",
    description: "O próprio portfólio que você está vendo. É a demonstração principal das minhas habilidades em React, JavaScript e design responsivo, feito do zero.",
    imageUrl: "/sites/site6.png",
    siteUrl: "https://meu-portfolio-two-ruby.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/meu-portfolio",
    tags: ["React", "CSS", "bootstrap"] ,
    category: "React" 
  },
  {
    id: 4,
    title: "JobFinder",
    description: "Um site de busca de emprego completo, com front-end em React e integração com backend.",
    imageUrl: "/sites/site1.png",
    siteUrl: "https://job-finder-front.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/job-finder-front",
    tags: ["React", "Node.js", "CSS", "Full-Stack"],
    category: "React" 
  },
  
  {
    id: 5,
    title: "Cadastro",
    description: "Um sistema básico de CRUD (Criar, Ler, Atualizar, Deletar) de usuários, essencial para mostrar manipulação de dados em React.",
    imageUrl: "/sites/site5.png",
    siteUrl: "http://crud-react-joao.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/crud-react",
    tags: ["React", "Node.js", "CSS", "bootstrap", "Full-Stack"],
    category: "React" 
  },
  
  {
    id: 6,
    title: "projeto-spstyle", 
    description: "Uma loja esportiva, feito com HTML e CSS para o layout, e JavaScript simples para criar o carrossel de imagens.",
    imageUrl: "/sites/site4.png", 
    siteUrl: "https://loja-esportiva-ten.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/loja-esportiva", 
    tags: ["HTML", "CSS", "JS"],
    category: "HTML/CSS" 
  },

  {
    id: 7,
    title: "Ser Digital", 
    description: "Landing page desenvolvida durante um curso, foco total em HTML e CSS puro para garantir a responsividade (adaptável a celulares e computadores).",
    imageUrl: "/sites/site7.png", 
    siteUrl: "https://ser-digital-omega.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/Ser-Digital", 
    tags: ["HTML", "CSS"],
    category: "HTML/CSS" 
  },
   {
    id: 8,
    title: "Jogo de Palavras",
    description: "Este é um jogo simples, o jogador tem que adivinhar uma palavra secreta, letra por letra, antes que suas chances acabem.",
    imageUrl: "/sites/site8.png",
    siteUrl: "https://jogo-palavras.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/Jogo-Palavras",
    tags: ["React", "CSS"],
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
