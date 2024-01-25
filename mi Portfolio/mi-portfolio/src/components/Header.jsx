import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, IconButton, Grid, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(`Scrolling to section: ${sectionId}`);
      section.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    } else {
      console.error(`Section not found: ${sectionId}`);
    }
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#9c27b0', height: '100vh', width: '200px', top: 0, bottom: 0, left: 0, display: 'flex',
    flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', zIndex: '100' }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3, justifyContent: 'flex-end' }}>
        {isMobile && (
          <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)} sx={{ marginRight: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <List>
            {['Inicio', 'Sobre Mí', 'Habilidades', 'Habilidades Técnicas', 'Experiencia Laboral', 'Proyectos', 'Formación Reglada', 'Contacto', 'CV'].map((text) => (
              <ListItem button key={text} onClick={() => scrollToSection(text.toLowerCase().replace(/\s+/g, '-'))}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Typography variant="h6" sx={{ marginTop: 'auto', marginBottom: '2rem', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Tu Nombre
        </Typography>

        {isMobile ? null : (
          <Grid container direction="column" spacing={0.5} alignItems="center">
            {['Inicio', 'Sobre Mí', 'Habilidades', 'Habilidades Técnicas', 'Experiencia Laboral', 'Proyectos', 'Formación Reglada', 'Contacto', 'CV'].map((text) => (
              <Grid item key={text}>
                <Button color="inherit" onClick={() => scrollToSection(text.toLowerCase().replace(/\s+/g, '-'))} sx={{ color: 'white', fontSize: '0.9rem' }}>
                  {text}
                </Button>
              </Grid>
            ))}
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
