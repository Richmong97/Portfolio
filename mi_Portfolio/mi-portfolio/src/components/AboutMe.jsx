// Archivo src/components/AboutMe.jsx
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const AboutMe = () => {
  return (
    <Container id="about-style">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Sobre Mí</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            ¡Hola! Soy [Tu Nombre], un apasionado de [tus intereses y habilidades].
            [Más detalles sobre ti y tu motivación].
          </Typography>
        </Grid>
        {/* Puedes agregar más elementos Grid según sea necesario */}
      </Grid>
    </Container>
  );
};

export default AboutMe;

