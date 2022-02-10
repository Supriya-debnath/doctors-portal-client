import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Box, Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex', 
    height: 400,
    alignItems: 'center',

}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{...verticalCenter, textAlign: 'left'}}item xs={12} md={6}>
          <Box>
          <Typography variant='h3'>
             Your New Smile <br />
             Starts Here 
          </Typography>
          <Typography variant='h6' sx={{fontSize: '14px', fontWeight: '300', color: 'gray', 
          marginTop: '20px'}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat quidem ducimus molestiae sapiente aspernatur ipsum magni et, dicta ea. 
          </Typography>
          <Button style={{marginTop: '20px', backgroundColor: '#21C6BC'}} variant='contained'>Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img
          style={{width: 400}} 
          src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;