import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, MenuItem } from '@mui/material';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{ backgroundColor: 'transparent', position: 'static', top: 0, zIndex: 1201, boxShadow: '0', width: '100%' }}>
      <Toolbar sx={{ maxWidth: 'none' }}>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleMenuClick}
              sx={{
                marginRight: 2,
                color: '#87CEEB',
                transition: 'color 0.3s ease', // Agregar transición suave
                background: '#333333',
                '&:hover': {
                  color: '#333333', // Cambiar color al hacer hover
                  background: '#87CEEB',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuItemClick}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{
                '& .MuiListItem-root': {
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'transparent', // Hacer transparente el fondo del ítem al hacer hover
                  },
                },
                '& .MuiPaper-root': {
                  backgroundImage: 'linear-gradient(to right, #87CEEB, #7CCD7C)', // Usar el mismo degradado que los botones
                  color: '#333333', // Color del texto del menú
                },
              }}
            >
              {['Inicio', 'Sobre Mi', 'Habilidades', 'Habilidades Tecnicas', 'Experiencia Laboral', 'Proyectos', 'Educacion', 'Contacto', 'CV'].map((text) => (
                <MenuItem key={text} onClick={handleMenuItemClick}>
                  <ScrollLink
                    activeClass="active"
                    to={text.toLowerCase().replace(/\s+/g, '-')}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {text}
                  </ScrollLink>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : null}

        <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
          Tu Nombre
        </Typography>

        {isMobile ? null : (
          <Grid container spacing={1} justifyContent={isMediumScreen ? 'center' : 'center'}>
            {['Inicio', 'Sobre Mi', 'Habilidades', 'Habilidades Tecnicas', 'Experiencia Laboral', 'Proyectos', 'Educacion', 'Contacto', 'CV'].map((text) => (
              <Grid item key={text}>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#333333',
                    backgroundImage: 'linear-gradient(to right, #87CEEB, #7CCD7C)',
                    borderColor: '#87CEEB',
                    boxShadow: '2',
                    borderRadius: '20px',
                    transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease', // Agregar transición suave
                    '&:hover': {
                      borderColor: 'transparent', // Hacer el borde transparente al hacer hover
                      backgroundImage: 'linear-gradient(to right, #7CCD7C, #87CEEB)',
                      color: '#FFFFFF', // Cambiar color de texto al hacer hover
                    },
                  }}
                >
                  <ScrollLink
                    activeClass="active"
                    to={text.toLowerCase().replace(/\s+/g, '-')}
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration={500}
                  >
                    {text}
                  </ScrollLink>
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
