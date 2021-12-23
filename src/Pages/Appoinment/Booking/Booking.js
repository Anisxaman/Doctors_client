import { Grid } from '@material-ui/core';
import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking}) => {
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    const {name,time,space}=booking;
    return (
        <>
         <Grid align="center" item xs={12} sm={6} md={4}>

<Paper elevation={3} sx={{py:5}}>
            <Typography sx={{ color: 'error.main',fontWeight:600 }} variant="h6" gutterBottom component="div">
                    {name}
                </Typography>
            <Typography variant="h6" gutterBottom component="div">
                    {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                     {space} Spaces Available
            </Typography>
                        
            <Button onClick={handleBookingOpen} variant="contained">Book APPOINMENT</Button>
            {/* <Button onClick={handleOpen}>Open modal</Button>     */}
    </Paper>             
        </Grid>
        <BookingModal 
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        >

        </BookingModal>



        </>
       
    );
};

export default Booking;