import React from 'react';
import { Container, Typography, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';

const WorkExperience = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container id="work-style" sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4">Experiencia Laboral</Typography>
      {/* Agrega detalles sobre tu experiencia laboral */}
      <Card sx={{ width: '100%', maxWidth: '600px', margin: 'auto' }}>
        <CardContent>
          <Typography variant="h6">Nombre de la Empresa</Typography>
          <Typography variant="subtitle1">Cargo - Fecha de inicio a Fecha de finalización</Typography>
          <Typography variant="body1">Descripción de las responsabilidades y logros.</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default WorkExperience;
