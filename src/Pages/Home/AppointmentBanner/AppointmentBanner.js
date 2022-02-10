import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointmentBg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${appointmentBg})`,
    backgroundColor: 'rgba(39, 59, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 170,
    backgroundPosition : 'left',
}

const AppointmentBanner = () => {
    
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img 
          style={{width: 400, marginTop: '-110px'}}
          src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{
            display: 'flex',
            justifyContent: 'flex-start' ,
            alignItems: 'center',
            textAlign: 'left'
            }}>
            <Box>
            <Typography variant='h5' style={{color: '#21C6BC', fontWeight: '400'}}>
                Appointment
            </Typography>
            <Typography variant='h3' style={{color: 'white', paddingTop: '20px'}}>
                Make an Appointment <br/> Today
            </Typography>
            <Typography variant='h6' style={{color: 'white', fontSize: '14px', fontWeight: '300', paddingTop: '20px'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga voluptates ipsam esse quibusdam atque, autem tempore deleniti nulla nobis.
            </Typography>
                <Button style={{marginTop: '20px', backgroundColor: '#21C6BC'}} variant="contained">Learn More</Button>
            </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;