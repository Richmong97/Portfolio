import React from 'react';
import { Container, Typography, Link, useTheme, useMediaQuery } from '@mui/material';

const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container id="contact-style" sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4">Contacto</Typography>

      <Typography variant="body1" sx={{ marginTop: '15px' }}>
        Puedes contactarme a través de mi correo electrónico:{' '}
        <Link href="mailto:tu@email.com">tu@email.com</Link>
      </Typography>

      {/* Puedes agregar más información de contacto según tus necesidades */}

    </Container>
  );
};

export default Contact;
