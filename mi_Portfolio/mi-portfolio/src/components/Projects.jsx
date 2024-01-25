import React from 'react';
import { Button, Container, Typography, Card, CardContent, CardActions, useTheme, useMediaQuery } from '@mui/material';

const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container id="projects" sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4">Proyectos</Typography>

      {/* Ejemplo de Card para representar un proyecto */}
      <Card sx={{ maxWidth: '600px', margin: 'auto', marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h6">Nombre del Proyecto</Typography>
          <Typography variant="body1">Descripción del proyecto y sus características.</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            Ver Detalles
          </Button>
        </CardActions>
      </Card>

      {/* Puedes agregar más Cards o personalizar según tus proyectos */}
    </Container>
  );
};

export default Projects;
