import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const AvailableAppoinments = ({date}) => {
    const bookings=[
    {
        id:1,
        name:"Teeth Orthodonics",
        time:"08.00 AM-09.00 AM",
        space:10,
    },
    {
        id:2,
        name:"Cosmetic Dentistry",
        time:"09.00 AM-10.00 AM",
        space:8,

    },
    {
        id:3,
        name:"Teeth Cleaning",
        time:"08.00 AM-09.00 AM",
        space:10,

    },
    {
        id:4,
        name:"Teeth Orthodonics",
        time:"08.00 AM-09.00 AM",
        space:10
    },
    {
        id:5,
        name:"Teeth Orthodonics",
        time:"08.00 AM-09.00 AM",
        space:10
    },
    {
        id:6,
        name:"Teeth Orthodonics",
        time:"08.00 AM-09.00 AM",
        space:10,
    }
    ]
    return (
        <Container>
            <h1 align="center" >Available Appoinment on <span style={{color:"blue"}} > {date.toDateString()}</span></h1>


            <Grid container spacing={2}>
                    {
                        bookings.map(booking=><Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        
                        
                        ></Booking>)
                    }
                    
            </Grid>
            
        </Container>
    );
};

export default AvailableAppoinments;