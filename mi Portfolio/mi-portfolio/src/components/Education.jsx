// Archivo src/components/Education.jsx
import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import './Education.css'

const Education = () => {
  return (
    <Container id = 'education-style'>
      <Typography variant="h4">Formación Reglada</Typography>
      {/* Agrega detalles sobre tu formación académica */}
      <Card>
        <CardContent>
          <Typography variant="h6">Nombre de la Institución</Typography>
          <Typography variant="subtitle1">Título obtenido - Fecha de finalización</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Education;
