import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';

const TechnicalSkills = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const techSkills = ['JavaScript', 'React', 'Node.js']; // Agrega tus habilidades técnicas

  return (
    <Container id="technical-style" sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4">Habilidades Técnicas</Typography>
      <List>
        {techSkills.map((skill, index) => (
          <ListItem key={index} sx={{ justifyContent: isSmallScreen ? 'center' : 'flex-start' }}>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TechnicalSkills;
