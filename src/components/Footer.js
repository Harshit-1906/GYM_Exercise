import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '50%' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '22px', xs: '18px' } }} mt="20px" fontWeight="bold" textAlign="center"  pb="20px">Lion Fitness Club By Harshit Prasad</Typography>
  </Box>
);

export default Footer;