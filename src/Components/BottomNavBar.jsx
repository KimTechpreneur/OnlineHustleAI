import React from 'react';
import { BottomNavigation, BottomNavigationAction, useMediaQuery, Paper } from '@mui/material';
import { Home, Dashboard, Person, Roadmap } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(RouterLink)({
  textDecoration: 'none',
});

const BottomNav = styled(BottomNavigation)(({ theme }) => ({
  borderRadius: '20px',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#00102e',
  color: '#fff',
}));

function BottomNavBar() {
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return isMobile ? (
    <Paper elevation={3}>
      <BottomNav value={value} onChange={(event, newValue) => setValue(newValue)} showLabels>
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          component={StyledLink}
          to="/"
        />
        <BottomNavigationAction
          label="Dashboard"
          icon={<Dashboard />}
          component={StyledLink}
          to="/dashboard"
        />
        <BottomNavigationAction
          label="Profile"
          icon={<Person />}
          component={StyledLink}
          to="/profile"
        />
        <BottomNavigationAction
          label="Career Path"
          icon={<Roadmap />}
          component={StyledLink}
          to="/career-path"
        />
      </BottomNav>
    </Paper>
  ) : null;
}

export default BottomNavBar;
