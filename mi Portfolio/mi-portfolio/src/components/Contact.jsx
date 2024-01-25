// Archivo src/components/Contact.jsx
import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import './Contact.css'

const Contact = () => {
  return (
    <Container id = "contact-style">
      <Typography variant="h4">Contacto</Typography>
      <Typography variant="body1">
        Puedes contactarme a través de mi correo electrónico: {' '}
        <Link href="mailto:tu@email.com">tu@email.com</Link>
      </Typography>
    </Container>
  );
};

export default Contact;
