import React from 'react';
import { Container, Typography, Grid, Paper, Avatar, Button, Divider, TextField } from '@mui/material';
import { styled } from '@mui/system';

const ProfileSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: '#f5f5f5',
}));

const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.1)`,
  borderRadius: theme.shape.borderRadius,
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  margin: '0 auto',
  backgroundColor: theme.palette.primary.main,
  fontSize: '2.5rem',
}));

const HoverButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#FFA500',
  color: '#15243e', // Dark blue text color
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    backgroundColor: '#e59400',
    color: '#ffffff',
    transform: 'scale(1.05)',
  },
}));

const OutlineButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderColor: '#FFA500',
  color: '#FFA500',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    backgroundColor: '#FFA500',
    color: '#15243e', // Dark blue text color
    transform: 'scale(1.05)',
  },
}));

const Profile = () => {
  return (
    <ProfileSection>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Your Profile
        </Typography>
        <ProfilePaper>
          <ProfileAvatar>TP</ProfileAvatar>
          <Typography variant="h5" component="h3" sx={{ mt: 2 }}>
            Techpreneur
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 1 }}>
            techpreneur@example.com
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="text.secondary">
            Welcome to your profile! Here you can manage your details and explore additional features.
          </Typography>
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue="Buea, Cameroon"
            InputProps={{ readOnly: true }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue="+237 657 890 123"
            InputProps={{ readOnly: true }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Bio"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            defaultValue="Passionate tech entrepreneur with a knack for innovative solutions."
            InputProps={{ readOnly: true }}
            sx={{ mb: 2 }}
          />
          <HoverButton variant="contained">
            Edit Profile
          </HoverButton>
          <OutlineButton variant="outlined" sx={{ ml: 2 }}>
            View Activity
          </OutlineButton>
        </ProfilePaper>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 2, textAlign: 'center', boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.1)` }}>
              <Typography variant="h6">Recent Activities</Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                - Completed a course on Advanced Marketing.
                <br />
                - Attended a workshop on Startup Growth.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 2, textAlign: 'center', boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.1)` }}>
              <Typography variant="h6">Achievements</Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                - Successfully launched 5 new projects.
                <br />
                - Recognized as Top Innovator in the tech industry.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 2, textAlign: 'center', boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.1)` }}>
              <Typography variant="h6">Contact Info</Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                - LinkedIn: <a href="https://linkedin.com/in/techpreneur" target="_blank" rel="noopener noreferrer">linkedin.com/in/techpreneur</a>
                <br />
                - Twitter: <a href="https://twitter.com/techpreneur" target="_blank" rel="noopener noreferrer">twitter.com/techpreneur</a>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ProfileSection>
  );
};

export default Profile;
