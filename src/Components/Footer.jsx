import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FooterSection = styled('footer')(({ theme }) => ({
  background: '#00102e',
  color: '#fff',
  padding: theme.spacing(4, 0),
  textAlign: 'center',
}));

const Footer = () => {
  return (
    <FooterSection>
      <Container maxWidth="md">
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} OnlineHustleAI. All rights reserved.
        </Typography>
      </Container>
    </FooterSection>
  );
};

export default Footer;
