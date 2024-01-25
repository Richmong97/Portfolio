import React from 'react';
import { Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      id="home-style"
      sx={{
        textAlign: 'center',
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
          marginTop: 3,
        },
        [theme.breakpoints.up('md')]: {
          marginTop: 6,
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{marginTop: '40px'}}>
            ¡Bienvenido a mi Portfolio!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Aquí encontrarás información sobre mí y mis proyectos.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
