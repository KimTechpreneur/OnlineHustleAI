import React from 'react';
import { Container, Typography, Grid, Paper, Avatar, Button } from '@mui/material';
import { styled } from '@mui/system';

const ProfileSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: '#f5f5f5',
}));

const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
}));

const Profile = () => {
  return (
    <ProfileSection>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Your Profile
        </Typography>
        <ProfilePaper>
          <Avatar sx={{ width: 100, height: 100, margin: '0 auto' }}>U</Avatar>
          <Typography variant="h5" component="h3" sx={{ mt: 2 }}>
            User Name
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 1 }}>
            user@example.com
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3 }}>
            Edit Profile
          </Button>
        </ProfilePaper>
      </Container>
    </ProfileSection>
  );
};

export default Profile;
