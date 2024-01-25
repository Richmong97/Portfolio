import React from 'react';
import { Container, Typography, Link, useTheme, useMediaQuery } from '@mui/material';

const CV = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container id="cv-style" sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4">CV</Typography>

      <Typography variant="body1" sx={{ marginTop: '15px' }}>
        Puedes descargar mi CV aquí:{' '}
        <Link href="/ruta-a-tu-cv.pdf" target="_blank" download>
          Descargar CV
        </Link>
      </Typography>

      {/* Puedes agregar más información o secciones del CV según tus necesidades */}
    </Container>
  );
};

export default CV;
