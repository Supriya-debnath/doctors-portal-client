import React from 'react';
import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Booking = ({booking}) => {
    const {name, time, space} = booking;
    return (
        <Grid item xs={12} md={4} sm={6}>
            <Paper elevation={3} sx={{py: 5}}>
            <Typography sx={{color: 'info.main', fontWeight: '600'}} variant="h5" gutterBottom component="div">
                {name}
            </Typography>
            <Typography variant="h6" sx={{fontWeight: 600}} gutterBottom component="div">
                {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {space} SPACES AVAILABLE
            </Typography>
            <Button style={{marginTop: '20px', backgroundColor: '#21C6BC'}} variant="contained">Book Appointment</Button>
            </Paper>

         </Grid>
    );
};

export default Booking;