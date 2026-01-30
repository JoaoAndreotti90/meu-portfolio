import React, { useState } from "react";
import "./Projects.css";

const allProjectsData = [
  {
    id: 18,
    title: "BarberPro - Agendamento com IA",
    description:
      "Sistema Full Stack de agendamento para barbearias. O diferencial é um Chatbot com IA (Gemini) que negocia horários com o cliente, verifica conflitos no banco de dados e realiza o agendamento automaticamente, simulando uma recepção humana.",
    imageUrl: "/sites/site18.png", 
    siteUrl: "https://barber-pro-omega.vercel.app/", 
    githubUrl: "https://github.com/JoaoAndreotti90/BarberPro",
    tags: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Gemini AI",
      "Docker",
      "TypeScript",
      "Tailwind CSS",
    ],
    category: "Full Stack",
  },
  {
    id: 17,
    title: "SmartPost",
    description:
      "SaaS de geração de conteúdo viral com Inteligência Artificial. Possui sistema de créditos via Stripe (Webhooks), testes automatizados com Jest, autenticação segura e histórico de posts gerados.",
    imageUrl: "/sites/site17.png",
    siteUrl: "https://smart-post-ten.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/SmartPost",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "NextAuth",
      "Gemini API",
      "Jest",
    ],
    category: "Full Stack",
  },
  {
    id: 16,
    title: "FreelaVault",
    description:
      "Marketplace de códigos-fonte com upload de arquivos (.zip) via Vercel Blob. Possui sistema de checkout Stripe, avaliações de clientes condicionais à compra e área de download para compradores.",
    imageUrl: "/sites/site16.png",
    siteUrl: "https://freelavault.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/FreelaVault",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "NextAuth",
      "Vercel Blob",
    ],
    category: "Full Stack",
  },
  {
    id: 15,
    title: "LinkHub",
    description:
      "SaaS de Bio-Links desenvolvido com Next.js e Server Actions. Possui sistema de assinatura PRO integrado ao Stripe (Webhooks), autenticação via Google/Email, upload de imagens e reordenação Drag-and-Drop.",
    imageUrl: "/sites/site15.png",
    siteUrl: "https://linkhub-gamma.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/linkhub",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "NextAuth",
    ],
    category: "Full Stack",
  },
  {
    id: 14,
    title: "NextFood",
    description:
      "Plataforma Full Stack com Next.js (App Router) e TypeScript. Integração completa com Stripe, autenticação segura e banco de dados PostgreSQL via Prisma.",
    imageUrl: "/sites/site14.png",
    siteUrl: "https://next-food-xi-livid.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/NextFood",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
    ],
    category: "Full Stack",
  },
  {
    id: 13,
    title: "Cineflix",
    description:
      "Catálogo de filmes responsivo que consome a API do TMDB. Foco em estilização com Tailwind CSS e lógica de busca com React.",
    imageUrl: "/sites/site13.png",
    siteUrl: "https://cineflix-ruddy.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/cineflix",
    tags: ["React", "Tailwind CSS", "API"],
    category: "Front-end",
  },
  {
    id: 12,
    title: "Estoque",
    description:
      "Projeto desenvolvido para validar meus estudos de Tailwind CSS, migrando da lógica de componentes do Bootstrap. O foco foi criar uma interface responsiva e customizada do zero, utilizando apenas classes utilitárias para ter controle total do design.",
    imageUrl: "/sites/site12.png",
    siteUrl: "https://estoque-git-main-joao-andreottis-projects.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/estoque",
    tags: ["React", "Tailwind CSS"],
    category: "Estudos",
  },
  {
    id: 11,
    title: "TaskFlow",
    description:
      "O TaskFlow centraliza a organização de múltiplos projetos em dashboards exclusivos, eliminando a desordem com quadros Kanban interativos e gestão visual de equipes em tempo real.",
    imageUrl: "/sites/site11.png",
    siteUrl: "https://taskflow-sepia-psi.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/taskflow",
    tags: ["React", "Supabase", "CSS", "Full-Stack"],
    category: "Full Stack",
  },
  {
    id: 10,
    title: "AuraPro",
    description:
      "Landing Page responsiva e moderna desenvolvida com React e CSS puro (sem frameworks), com foco em UI Design e experiência do usuário.",
    imageUrl: "/sites/site10.png",
    siteUrl: "https://aura-pro-sigma.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/AuraPro",
    tags: ["React", "CSS"],
    category: "Landing Page",
  },
  {
    id: 9,
    title: "DoutorCerto",
    description:
      "Plataforma completa de agendamento médico que conecta pacientes a especialistas.",
    imageUrl: "/sites/site9.png",
    siteUrl: "https://doutor-certo.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/DoutorCerto",
    tags: ["React", "Supabase", "CSS", "Full-Stack"],
    category: "Full Stack",
  },
  {
    id: 1,
    title: "PixelFeed",
    description:
      "Uma rede social de fotos completa, com login, curtidas e comentários. Usa React para o front-end e se comunica com um backend.",
    imageUrl: "/sites/site2.png",
    siteUrl: "https://pixel-feed-peach.vercel.app/login",
    githubUrl: "https://github.com/JoaoAndreotti90/PixelFeed",
    tags: ["React", "Supabase", "CSS", "Full-Stack"],
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Mini Blog",
    description:
      "Uma aplicação para criar e postar artigos simples, com foco no uso de React para gerenciar o conteúdo e a navegação.",
    imageUrl: "/sites/site3.png",
    siteUrl: "https://mini-blog-kappa-beryl.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/Mini-blog",
    tags: ["React", "Supabase", "CSS", "Full-Stack"],
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Portfólio",
    description:
      "O próprio portfólio que você está vendo. É a demonstração principal das minhas habilidades em React, JavaScript e design responsivo, feito do zero.",
    imageUrl: "/sites/site6.png",
    siteUrl: "https://meu-portfolio-two-ruby.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/meu-portfolio",
    tags: ["React", "CSS", "bootstrap"],
    category: "Front-end",
  },
  {
    id: 4,
    title: "JobFinder",
    description:
      "Um site de busca de emprego completo, com front-end em React e integração com backend.",
    imageUrl: "/sites/site1.png",
    siteUrl: "https://job-finder-front.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/job-finder-front",
    tags: ["React", "Node.js", "CSS", "Full-Stack"],
    category: "Full Stack",
  },

  {
    id: 5,
    title: "Cadastro",
    description:
      "Um sistema básico de CRUD (Criar, Ler, Atualizar, Deletar) de usuários, essencial para mostrar manipulação de dados em React.",
    imageUrl: "/sites/site5.png",
    siteUrl: "http://crud-react-joao.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/crud-react",
    tags: ["React", "Node.js", "CSS", "bootstrap", "Full-Stack"],
    category: "Estudos",
  },

  {
    id: 6,
    title: "projeto-spstyle",
    description:
      "Uma loja esportiva, feito com HTML e CSS para o layout, e JavaScript simples para criar o carrossel de imagens.",
    imageUrl: "/sites/site4.png",
    siteUrl: "https://loja-esportiva-ten.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/loja-esportiva",
    tags: ["HTML", "CSS", "JS"],
    category: "Landing Page",
  },

  {
    id: 7,
    title: "Ser Digital",
    description:
      "Landing page desenvolvida durante um curso, foco total em HTML e CSS puro para garantir a responsividade (adaptável a celulares e computadores).",
    imageUrl: "/sites/site7.png",
    siteUrl: "https://ser-digital-omega.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/Ser-Digital",
    tags: ["HTML", "CSS"],
    category: "Landing Page",
  },
  {
    id: 8,
    title: "Jogo de Palavras",
    description:
      "Este é um jogo simples, o jogador tem que adivinhar uma palavra secreta, letra por letra, antes que suas chances acabem.",
    imageUrl: "/sites/site8.png",
    siteUrl: "https://jogo-palavras.vercel.app/",
    githubUrl: "https://github.com/JoaoAndreotti90/Jogo-Palavras",
    tags: ["React", "CSS"],
    category: "Estudos",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filteredProjects = allProjectsData.filter((project) => {
    if (activeFilter === "Todos") {
      return true;
    }
    return project.category === activeFilter;
  });

  return (
    <section className="projects-section">
      <h2 className="projects-section-title">Meus Projetos</h2>

      <div className="project-filters">
        <button
          className={`filter-btn ${activeFilter === "Todos" ? "active" : ""}`}
          onClick={() => setActiveFilter("Todos")}
        >
          Todos
        </button>
        <button
          className={`filter-btn ${activeFilter === "Full Stack" ? "active" : ""}`}
          onClick={() => setActiveFilter("Full Stack")}
        >
          Full Stack
        </button>
        <button
          className={`filter-btn ${activeFilter === "Front-end" ? "active" : ""}`}
          onClick={() => setActiveFilter("Front-end")}
        >
          Front-end
        </button>
        <button
          className={`filter-btn ${activeFilter === "Landing Page" ? "active" : ""}`}
          onClick={() => setActiveFilter("Landing Page")}
        >
          Landing Page
        </button>
        <button
          className={`filter-btn ${
            activeFilter === "Estudos" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("Estudos")}
        >
          Estudos
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
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
};

export default Projects;