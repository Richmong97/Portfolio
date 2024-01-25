import React from 'react';
import { Container, Typography, Grid, Chip, useTheme, useMediaQuery } from '@mui/material';

const Skills = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const skillsList = ['Habilidad 1', 'Habilidad 2', 'Habilidad 3', 'Habilidad 4']; // Agrega tus habilidades

  return (
    <Container id='skill-style' sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4">Habilidades Principales</Typography>
      <Grid container justifyContent="center" spacing={isSmallScreen ? 1 : 2}>
        {skillsList.map((skill, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
            <Chip label={skill} style={{ margin: '4px' }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
