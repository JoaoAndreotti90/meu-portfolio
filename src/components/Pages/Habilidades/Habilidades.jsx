import React from "react";
import "./Habilidades.css";

const skillsData = [
  {
    category: "Front-End",
    items: [
      { name: "React", logo: "/icons/icons8-reagir-96.png" },
      { name: "Next.js", logo: "/icons/icons8-nextjs-96.png" },
      { name: "Typescript", logo: "/icons/icons8-typescript-96.png" },
      { name: "JavaScript", logo: "/icons/icons8-javascript-96.png" },
      { name: "Tailwind CSS", logo: "/icons/icons8-tailwind-96.png" },
      { name: "HTML5", logo: "/icons/icons8-html-96.png" },
      { name: "CSS3", logo: "/icons/icons8-css-96.png" },
    ],
  },
  {
    category: "Back-End & Banco de Dados",
    items: [
      { name: "Node.js", logo: "/icons/icons8-nodejs-96.png" },
      { name: "PostgreSQL", logo: "/icons/icons8-postgresql-48.png" },
      { name: "Prima ORM", logo: "/icons/icons8-prisma.png" },
    ],
  },
  {
    category: "Ferramentas & Versionamento",
    items: [
      { name: "Git", logo: "/icons/icons8-git-96.png" },
      { name: "GitHub", logo: "/icons/icons8-github-96.png" },
      { name: "Vercel", logo: "/icons/vercel_.png" },
    ],
  },
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
                  <img
                    src={skill.logo}
                    alt={`Logo ${skill.name}`}
                    className="skill-logo"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
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
