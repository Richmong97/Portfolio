// Archivo src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import CV from './components/CV';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div id="inicio"><Home /></div>
  <div id="sobre-mi"><AboutMe /></div>
  <div id="habilidades"><Skills /></div>
  <div id="habilidades-tecnicas"><TechnicalSkills /></div>
  <div id="experiencia-laboral"><WorkExperience /></div>
  <div id="proyectos"><Projects /></div>
  <div id="educacion"><Education /></div>
  <div id="contacto"><Contact /></div>
  <div id="cv"><CV /></div>
      </div>
    </Router>
  );
};

export default App;
