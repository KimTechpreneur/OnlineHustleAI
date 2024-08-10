import React from 'react';
import { Container, Typography, Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/system';
import WhyChooseSection from './WhyChooseSection';

const HeroSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #15243e 30%, #0d1b2a 90%)',
  color: '#fff',
  textAlign: 'center',
}));

const FormSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f5f5f5',
}));

const FooterSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: '#15243e',
  color: '#fff',
  textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 3),
  fontSize: '1rem',
  backgroundColor: '#FFA500',
  color: '#15243e',
  '&:hover': {
    backgroundColor: '#cc8400',
    color: '#fff',
  },
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 3),
  fontSize: '1rem',
  backgroundColor: '#fff',
  color: '#15243e',
  borderColor: '#FFA500',
  '&:hover': {
    backgroundColor: '#f0f0f0',
    color: '#15243e',
  },
}));

const Home = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Find Your Perfect Side Hustle Today!
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Personalized, step-by-step guidance to start and succeed in your side hustle.
          </Typography>
          <StyledButton variant="contained" size="large">
            Get Started
          </StyledButton>
          <OutlinedButton variant="outlined" size="large" sx={{ marginLeft: '16px' }}>
            Learn More
          </OutlinedButton>
        </Container>
      </HeroSection>
      <FormSection>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Let us help you find the perfect side hustle
          </Typography>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Time Availability" type="text" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Initial Capital" type="number" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Skill Level</InputLabel>
                  <Select label="Skill Level">
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Beginner</MenuItem>
                    <MenuItem value={20}>Intermediate</MenuItem>
                    <MenuItem value={30}>Expert</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Preferences</InputLabel>
                  <Select label="Preferences">
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Tech</MenuItem>
                    <MenuItem value={20}>Art</MenuItem>
                    <MenuItem value={30}>Business</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel control={<Checkbox />} label="Remote" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel control={<Checkbox />} label="Flexible Hours" />
              </Grid>
              <Grid item xs={12}>
                <StyledButton variant="contained" type="submit">
                  Show Me Side Hustles
                </StyledButton>
              </Grid>
            </Grid>
          </form>
        </Container>
      </FormSection>
      <WhyChooseSection />
      <FooterSection>
        <Container maxWidth="lg">
          <Typography variant="body1" component="p">
            © 2024 OnlineHustleAI. All rights reserved.
          </Typography>
        </Container>
      </FooterSection>
    </>
  );
};

export default Home;
