import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';


const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography variant='h4'>
                    Appointment
                </Typography>
                <Calendar date={date} setDate={setDate}></Calendar>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width: 400}}
                src={chair} alt="" />
            </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;