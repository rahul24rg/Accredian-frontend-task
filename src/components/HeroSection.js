import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import styled from '@emotion/styled';

const HeroBox = styled(Box)`
  padding: 50px 0;
  background-color: #e0f7fa;
  text-align: center;
`;

const HeroSection = ({ onOpenModal }) => (
  <HeroBox>
    <Container>
      <Typography variant="h3" gutterBottom>
        Refer & Earn Program
      </Typography>
      <Typography variant="h6" gutterBottom>
        Invite your friends and earn rewards when they enroll in our programs.
      </Typography>
      <Button variant="contained" color="primary" onClick={onOpenModal}>
        Refer Now
      </Button>
    </Container>
  </HeroBox>
);

export default HeroSection;
