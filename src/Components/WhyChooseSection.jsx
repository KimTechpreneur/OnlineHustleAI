import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { styled } from '@mui/system';

const WhyChooseSectionWrapper = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f5f5f5',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[4],
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFA500',
  color: '#15243e',
  '&:hover': {
    backgroundColor: '#cc8400',
    color: '#fff',
  },
}));

const WhyChooseSection = () => {
  const features = [
    {
      title: 'Personalized Guidance',
      description: 'Tailored recommendations based on your unique profile and preferences.',
    },
    {
      title: 'Comprehensive Resources',
      description: 'Access a wide range of resources to help you succeed in your side hustle journey.',
    },
    {
      title: 'Community Support',
      description: 'Join a community of like-minded individuals and get support every step of the way.',
    },
  ];

  return (
    <WhyChooseSectionWrapper>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Why Choose OnlineHustleAI?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <StyledButton size="small">
                    Learn More
                  </StyledButton>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </WhyChooseSectionWrapper>
  );
};

export default WhyChooseSection;
