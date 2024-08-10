import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, Dashboard as DashboardIcon, Person, Timeline } from '@mui/icons-material'; // Import valid icons
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

  return (
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
          icon={<DashboardIcon />}
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
          icon={<Timeline />}
          component={StyledLink}
          to="/career-path"
        />
      </BottomNav>
    </Paper>
  );
}

export default BottomNavBar;
