// Archivo src/components/AboutMe.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import './AboutMe.css'

const AboutMe = () => {
  return (
    <Container id="about-style">
      <Typography variant="h4">Sobre Mí</Typography>
      <Typography variant="body1">
        ¡Hola! Soy [Tu Nombre], un apasionado de [tus intereses y habilidades].
        [Más detalles sobre ti y tu motivación].
      </Typography>
    </Container>
  );
};

export default AboutMe;
