import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(RouterLink)({
  color: 'white',
  textDecoration: 'none',
});

function Navbar() {
  return (
    <AppBar position="static" sx={{ background: '#00102e' }}>
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
