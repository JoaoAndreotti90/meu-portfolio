import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home'
import Projects from './components/Pages/Projects/Projects'
import Habilidades from './components/Pages/Habilidades/Habilidades'
import Contact from './components/Pages/Contact/Contact'
import Certification from './components/Pages/Certification/Certification'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/projetos" element={<Layout><Projects /></Layout>} />
      <Route path="/habilidades" element={<Layout><Habilidades /></Layout>} />
      <Route path="/certificacoes" element={<Layout><Certification /></Layout>} />
      <Route path="/contato" element={<Layout><Contact /></Layout>} />
    </Routes>
  )
}

export default App