import { Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings =[ 
{
    id: 1,
    name: 'Teeth Orthodonics',
    time: '8.00 am - 9.00 am',
    space: 10,
},
{
    id: 2,
    name: 'Cosmetic Dentistry',
    time: '10.00 am - 11.00 am',
    space: 20,
},
{
    id: 3,
    name: 'Teeth Cleaning',
    time: '12.00 am - 1.00 am',
    space: 17,
},
{
    id: 4,
    name: 'Cavity Protection',
    time: '4.00 am - 5.00 am',
    space: 10,
},
{
    id: 5,
    name: 'Pediatric Dental',
    time: '6.00 am - 7.00 am',
    space: 14,
},
{
    id: 6,
    name: 'Oral Surgery',
    time: '8.00 am - 9. 00 am',
    space: 7,
}
]

const AvailableAppointments = ({date}) => {
    
    return (
        <div>
            <Typography variant='h4' sx={{color: 'info.main', mb: 3}}>Available Appointments On <em sx={{color: '#E80D42'}}>{date.toDateString()}</em>
            </Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id}
                    booking={booking}
                    date={date}
                    ></Booking>)
                }
                
            </Grid>
        </div>
    );
};

export default AvailableAppointments;