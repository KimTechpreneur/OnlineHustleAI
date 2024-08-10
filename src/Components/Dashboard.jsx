import React from 'react';
import { Container, Typography, Grid, TextField, Card, CardContent, CardActions, Button, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

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

const Dashboard = () => {
  const sideHustles = [
    { title: 'Freelance Writing', description: 'Write articles and get paid.' },
    { title: 'Graphic Design', description: 'Create designs for clients.' },
    { title: 'Virtual Assistant', description: 'Assist clients remotely.' },
  ];

  return (
    <DashboardSection>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Dashboard
        </Typography>
        <SearchContainer>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for side hustles..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </SearchContainer>
        <Grid container spacing={4}>
          {sideHustles.map((hustle, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
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
