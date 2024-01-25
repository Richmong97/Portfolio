// Archivo src/components/WorkExperience.jsx
import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import './WorkExperience.css'

const WorkExperience = () => {
  return (
    <Container id = "work-style">
      <Typography variant="h4">Experiencia Laboral</Typography>
      {/* Agrega detalles sobre tu experiencia laboral */}
      <Card>
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
