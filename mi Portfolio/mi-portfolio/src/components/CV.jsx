// Archivo src/components/CV.jsx
import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import './CV.css'

const CV = () => {
  return (
    <Container id = "cv-style">
      <Typography variant="h4">CV</Typography>
      <Typography variant="body1">
        Puedes descargar mi CV aquí: {' '}
        <Link href="/ruta-a-tu-cv.pdf" target="_blank" download>
          Descargar CV
        </Link>
      </Typography>
    </Container>
  );
};

export default CV;
