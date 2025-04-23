import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { RestaurantMenu as MenuIcon, Info as InfoIcon, LocalDining as DiningIcon, ShoppingCart as CartIcon } from '@mui/icons-material';

const Navbar = () => {
  return (
    <>
      {/* Main Navbar */}
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.8)',
          mt: -1,
          mr: -1,
          ml: -1,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Restaurant Name */}
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 'bold',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            <Link to="/" style={{ color: 'red', textDecoration: 'none' }}>
            LuxDine
            </Link>
          </Typography>

          {/* Search Bar - Glassmorphism */}
          <Paper
            component="form"
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: 350,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '6px 12px',
              borderRadius: '25px',
              border: '1px solid rgba(255, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              mt: 3,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, color: 'white' }}
              placeholder="Search dishes, menu, reservations..."
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" sx={{ color: 'red' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          {/* Navigation Buttons with Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
           
            <Button
              component={Link}
              to="/profile"
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: '0.3s',
                '&:hover': { color: 'red', transform: 'scale(1.1)' },
              }}
            >
              <ContactMailIcon /> profile
            </Button>
            <Button
              component={Link}
              to="/cart"
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: '0.3s',
                '&:hover': { color: 'red', transform: 'scale(1.1)' },
              }}
            >
              <CartIcon /> Cart
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sub-navbar */}
      <Box
        sx={{
          background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',
          boxShadow: 'inset 0px -3px 5px rgba(255, 0, 0, 0.5)',
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mr: -1,
          ml: -1,
        }}
      >
        <Box sx={{ display: 'flex', gap: '30px' }}>
          {[
             { text: 'restaurant', icon: <MenuIcon />, link: '/restaurant' },            
            { text: 'Specials', icon: <InfoIcon />, link: '/specials' },
            { text: 'about', icon: <InfoIcon />, link: '/about' },
            { text: 'contact', icon: <ContactMailIcon />, link: '/contact' },

          ].map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.link}
              sx={{
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: '0.3s',
                '&:hover': { color: 'red', transform: 'scale(1.1)' },
              }}
            >
              {item.icon} {item.text}
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
