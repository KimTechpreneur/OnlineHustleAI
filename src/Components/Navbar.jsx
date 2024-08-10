import React from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

const StyledLink = styled(RouterLink)({
  color: 'white',
  textDecoration: 'none',
});

const DrawerList = styled(List)(({ theme }) => ({
  width: 250,
}));

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar position="static" sx={{ background: '#00102e' }}>
        <Toolbar>
          {isMobile && (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <DrawerList>
                  <ListItem button component={StyledLink} to="/" onClick={toggleDrawer}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button component={StyledLink} to="/dashboard" onClick={toggleDrawer}>
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                  <ListItem button component={StyledLink} to="/profile" onClick={toggleDrawer}>
                    <ListItemText primary="Profile" />
                  </ListItem>
                  <ListItem button component={StyledLink} to="/career-path" onClick={toggleDrawer}>
                    <ListItemText primary="Career Path" />
                  </ListItem>
                </DrawerList>
              </Drawer>
            </>
          )}
          {!isMobile && (
            <>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                OnlineHustleAI
              </Typography>
              <Button color="inherit" component={StyledLink} to="/">
                Home
              </Button>
              <Button color="inherit" component={StyledLink} to="/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" component={StyledLink} to="/profile">
                Profile
              </Button>
              <Button color="inherit" component={StyledLink} to="/career-path">
                Career Path
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
