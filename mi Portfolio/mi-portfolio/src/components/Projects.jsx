// Archivo src/components/Projects.jsx
import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import './Projects.css';

const Projects = () => {
  return (
    <Container id="projects">
      <Typography variant="h4">Proyectos</Typography>
      <Button>Prueba</Button>
      <p>Prueba 123</p>
      {/* Contenido de la sección de proyectos */}
    </Container>
  );
};

export default Projects;
