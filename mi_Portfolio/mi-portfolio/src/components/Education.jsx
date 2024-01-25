import React from 'react';
import { Container, Typography, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';

const Education = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container id="education-style" sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4">Formación Reglada</Typography>

      {/* Ejemplo de Card para representar la formación académica */}
      <Card sx={{ maxWidth: '600px', margin: 'auto', marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h6">Nombre de la Institución</Typography>
          <Typography variant="subtitle1">Título obtenido - Fecha de finalización</Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: '600px', margin: 'auto', marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h6">Nombre de la Institución</Typography>
          <Typography variant="subtitle1">Título obtenido - Fecha de finalización</Typography>
        </CardContent>
      </Card>

      {/* Puedes agregar más Cards o personalizar según tu formación académica */}
    </Container>
  );
};

export default Education;
