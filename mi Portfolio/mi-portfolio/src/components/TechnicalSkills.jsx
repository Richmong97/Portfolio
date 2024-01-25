// Archivo src/components/TechnicalSkills.jsx
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import './TechnicalSkills.css'

const TechnicalSkills = () => {
  const techSkills = ['JavaScript', 'React', 'Node.js']; // Agrega tus habilidades técnicas

  return (
    <Container id = "technical-style">
      <Typography variant="h4">Habilidades Técnicas</Typography>
      <List>
        {techSkills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TechnicalSkills;
