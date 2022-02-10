import React from 'react';
import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking, date}) => {
    const {name, time, space} = booking;

    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
        <>
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
            <Button onClick={handleBookingOpen}  style={{marginTop: '20px', backgroundColor: '#21C6BC'}} variant="contained">Book Appointment</Button>
            </Paper>

         </Grid>
         <BookingModal
         date={date}
         booking={booking}
         openBooking={openBooking}
         handleBookingClose={handleBookingClose}
         >
         </BookingModal>
        </>
         
    );
};

export default Booking;