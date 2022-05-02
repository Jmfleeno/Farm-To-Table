/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import ThemeProvider from './App';
import { Grid, Switch } from '@mui/material'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const NewNavBar = ({ user, mode, setMode }: any, props: Props) => {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Sign Up!', path: '/subscriptions-page' },
    { name: 'Products ', path: '/edit-products' },
    { name: 'Weather', path: '/weather-page' },
    { name: 'Farm events', path: '/events-page' },
    { name: 'About Us', path: '/about-us-page' },
  ];

  if (user.role_id === 4) {
    const settings = [
      { name: 'Orders', path: '/orders-page' },
      { name: 'Records', path: '/records' },
      { name: 'Packing List', path: '/packing-lists' },
      { name: 'Delivery Routes', path: '/delivery-routes' },
      { name: 'Edit User Role', path: '/edit-users' },
      { name: 'Profile', path: '/profile-page' },
      // { name: 'Logout', path: '/auth/api/logout' }, // NEEDS ATTENTION!
    ];
  } else if (user.role_id === 3) {
    const settings = [
      { name: 'Packing List', path: '/packing-lists' },
      { name: 'Delivery Routes', path: '/delivery-routes' },
      { name: 'Profile', path: '/profile-page' },
      // { name: 'Logout', path: '/auth/api/logout' },
    ];
  } else if (user.role_id === 2 || user.role_id === 1) {
    const settings = [
      { name: 'Orders', path: '/orders-page' },
      { name: 'Profile', path: '/profile-page' },
      // { name: 'Logout', path: '/auth/api/logout' },
    ];
  } else {
    const settings = [{ name: 'Login', path: '/login' }];
  }

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position='fixed'
          style={{
            backgroundColor: 'lightgreen',
            maxHeight: '5rem',
            // margin: '.4rem',
            justifyContent: 'center',
            marginTop: '1rem',
            marginRight: '1rem',
            marginLeft: '5vw',
            borderRadius: '50px',
          }}
        >
          <Container>
            <Toolbar
              sx={{
                justifyContent: 'space-between',
              }}
            >
              {/* removed disableGutters attribute from toolbar */}
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                Bumpkin' Box
              </Typography>

              <Box
                sx={{
                  flexGrow: 1,
                  maxHeight: '4rem',
                  flexDirection: 'row',
                  display: { xs: 'flex', md: 'none' },
                }}
              >
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      {/* // link tags are anchor tags under the hood */}
                      <Link to={page.path}>
                        <Typography textAlign='center'>{page.name}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Switch onClick={() => setMode(!mode)}></Switch>
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                Bumpkin' Box
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <Link to={page.path}>{page.name}</Link>
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: -1 }}>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt='Rene M'
                      src={user.picture}
                      style={{
                        // EDITED AVATAR HEIGHT EXPERIMENT
                        border: '2px solid lightgray',
                        width: '4.9rem',
                        height: '4.9rem',
                        alignSelf: 'right',
                      }}
                      component={Paper}
                      elevation={2}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                      <Link to={setting.path}>
                        <Typography textAlign='center'>
                          {setting.name}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
export default NewNavBar;
