import React from 'react';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects';
import Habilidades from './components/Pages/Habilidades/Habilidades';
import Contact from './components/Pages/Contact/Contact';
import Certification from './components/Pages/Certification/Certification';

function App() {
  return (
    <Layout>
      <section id="home">
        <Home />
      </section>

      <section id="projetos">
        <Projects />
      </section>

      <section id="habilidades">
        <Habilidades />
      </section>

      <section id="certificacoes">
        <Certification />
      </section>

      <section id="contato">
        <Contact />
      </section>
    </Layout>
  );
}

export default App;