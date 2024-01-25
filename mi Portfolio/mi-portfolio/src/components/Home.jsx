// Archivo src/components/Home.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import './Home.css'

const Home = () => {
  return (
    <Container id="home-style">
      <Typography variant="h3">
        ¡Bienvenido a mi Portfolio!
      </Typography>
      <Typography variant="body1">
        Aquí encontrarás información sobre mí y mis proyectos.
      </Typography>
    </Container>
  );
};

export default Home;
