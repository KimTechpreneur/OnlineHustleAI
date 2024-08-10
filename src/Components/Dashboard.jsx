import React from 'react';
import { Container, Typography, Grid, TextField, Card, CardContent, CardActions, Button, InputAdornment, Paper, Badge, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';

const DashboardSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f5f5f5',
}));

const SearchContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFA500',
  color: '#15243e',
  '&:hover': {
    backgroundColor: '#cc8400',
    color: '#fff',
  },
}));

const StatsCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.1)`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#e8f4f8', // Soft light blue background
}));

const NotificationPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  backgroundColor: '#fff',
  boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.1)`,
  display: 'flex',
  alignItems: 'center',
}));

const QuickActionsPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  backgroundColor: '#fff',
  boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.1)`,
  display: 'flex',
  justifyContent: 'space-around',
}));

const Dashboard = () => {
  const sideHustles = [
    { title: 'Content Creation', description: 'Create engaging content for various platforms.' },
    { title: 'E-commerce Management', description: 'Manage online stores and drive sales.' },
    { title: 'Digital Marketing', description: 'Promote businesses through digital channels.' },
  ];

  return (
    <DashboardSection>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Your Dashboard
        </Typography>
        <SearchContainer>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for opportunities..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </SearchContainer>

        {/* Notifications Panel */}
        <NotificationPaper>
          <IconButton color="primary" aria-label="notifications">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Typography variant="body2" sx={{ ml: 2 }}>
            You have 3 new updates! Check out your latest messages and tasks.
          </Typography>
        </NotificationPaper>

        {/* Statistics Section */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard>
              <Typography variant="h5">7</Typography>
              <Typography variant="body2">Active Projects</Typography>
            </StatsCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard>
              <Typography variant="h5">4</Typography>
              <Typography variant="body2">Pending Tasks</Typography>
            </StatsCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard>
              <Typography variant="h5">12</Typography>
              <Typography variant="body2">Upcoming Deadlines</Typography>
            </StatsCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard>
              <Typography variant="h5">8</Typography>
              <Typography variant="body2">Messages</Typography>
            </StatsCard>
          </Grid>
        </Grid>

        {/* Quick Actions */}
        <QuickActionsPaper>
          <StyledButton
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ flex: 1, mr: 1 }}
          >
            Add New Opportunity
          </StyledButton>
          <StyledButton
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ flex: 1, ml: 1 }}
          >
            Create Task
          </StyledButton>
        </QuickActionsPaper>

        {/* Side Hustles Cards */}
        <Grid container spacing={4}>
          {sideHustles.map((hustle, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.1)`, borderRadius: '8px' }}>
                <CardContent>
                  <Typography variant="h5" component="h3">
                    {hustle.title}
                  </Typography>
                  <Typography variant="body1">
                    {hustle.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <StyledButton size="small">
                    Learn More
                  </StyledButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </DashboardSection>
  );
};

export default Dashboard;
