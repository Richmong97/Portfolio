// Archivo src/components/Skills.jsx
import React from 'react';
import { Container, Typography, Chip } from '@mui/material';
import './Skills.css'

const Skills = () => {
  const skillsList = ['Habilidad 1', 'Habilidad 2', 'Habilidad 3', 'Habilidad 4']; // Agrega tus habilidades

  return (
    <Container id='skill-style'>
      <Typography variant="h4">Habilidades Principales</Typography>
      {skillsList.map((skill, index) => (
        <Chip key={index} label={skill} style={{ margin: '4px' }} />
      ))}
    </Container>
  );
};

export default Skills;
