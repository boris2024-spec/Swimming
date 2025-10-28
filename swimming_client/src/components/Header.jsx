import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link as RouterLink } from 'react-router-dom';
import { ColorModeContext } from '../App.jsx';
import DarkModeSwitch from './DarkModeSwitch.jsx';

const nav = [
  { to: '/', label: 'בית' },
  { to: '/about', label: 'אודות' },
  { to: '/programs', label: 'מסלולים' },
  { to: '/coaches', label: 'מאמנים' },
  { to: '/gallery', label: 'גלריה' },
  { to: '/schedule', label: 'לוח זמנים' },
  { to: '/pricing', label: 'מחירים' },
  { to: '/faq', label: 'שאלות' },
  { to: '/contact', label: 'צור קשר' },
  { to: '/register', label: 'רישום' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <AppBar position="sticky" color="primary" enableColorOnDark >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 1 }}>
          <img src=".\public\Screenshot 2.png" alt="Logo" style={{ marginRight: '8px', height: '60px', borderRadius: '50%' }} />
          <Typography variant="h6" component={RouterLink} to="/" color="inherit" sx={{ textDecoration: 'none', flexGrow: 1, fontWeight: 800 }}>
         הפועל באר שבע 
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {nav.map((item) => (
              <Button key={item.to} color="inherit" component={RouterLink} to={item.to}>
                {item.label}
              </Button>
            ))}
            <DarkModeSwitch onToggle={toggleColorMode} />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <DarkModeSwitch onToggle={toggleColorMode} />
            <IconButton color="inherit" onClick={() => setOpen(true)}><MenuIcon /></IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {nav.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton component={RouterLink} to={item.to}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;