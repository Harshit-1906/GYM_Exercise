import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner5.png'
// import { Height } from '@mui/icons-material';
import HeroBannerImage1 from '../assets/images/banner6.png.jpg'


const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}  position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="85px" style={{ fontFamily : 'Matura MT Script Capitals'}} >Lion</Typography>
      <Typography color="#FF2625" fontWeight="600" fontSize="45px" style={{ fontFamily : 'ROG Fonts'}} >Fitness Club</Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '48px', xs: '44px' } }} style={{ fontFamily : 'Cooper Black'}} mb="23px" mt="30px">
      Sweat , Smile <br />
      and Repeat
    </Typography>  
    {/* <Typography>
    <img src={HeroBannerImage1}  style={{ width : '20%', height : '40%'}} alt="hero-banner" className="hero-banner-img" />
    </Typography> */}
    <Typography fontSize="22px" fontFamily="Script MT Bold" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="Exercises.js" style={{ marginTop: '25px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '10px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage}  style={{ width : '55%', height : '100%'}} alt="hero-banner" className="hero-banner-img" />
  </Box>
  )
}

export default HeroBanner
