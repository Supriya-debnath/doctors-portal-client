import { Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings =[ 
{
    id: 1,
    name: 'Teeth Arthodonies',
    time: '8.00 am - 9. 00 am',
    space: 10,
},
{
    id: 1,
    name: 'Teeth Arthodonies',
    time: '8.00 am - 9. 00 am',
    space: 10,
},
{
    id: 1,
    name: 'Teeth Arthodonies',
    time: '8.00 am - 9. 00 am',
    space: 10,
},
{
    id: 1,
    name: 'Teeth Arthodonies',
    time: '8.00 am - 9. 00 am',
    space: 10,
},
{
    id: 1,
    name: 'Teeth Arthodonies',
    time: '8.00 am - 9. 00 am',
    space: 10,
},
{
    id: 1,
    name: 'Teeth Arthodonies',
    time: '8.00 am - 9. 00 am',
    space: 10,
}
]

const AvailableAppointments = ({date}) => {
    
    return (
        <div>
            <Typography variant='h4' sx={{color: 'info.main', mb: 3}}>Available Appointments {date.toDateString()}
            </Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id}
                    booking={booking}
                    ></Booking>)
                }
                
            </Grid>
        </div>
    );
};

export default AvailableAppointments;