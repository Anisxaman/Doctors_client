import { Grid } from '@material-ui/core';
import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Booking = ({booking}) => {
    const {name,time,space}=booking;
    return (
        <Grid align="center" item xs={12} sm={6} md={4}>

<Paper elevation={3} sx={{py:5}}>
            <Typography variant="h6" gutterBottom component="div">
                    {name}
                </Typography>
            <Typography variant="h6" gutterBottom component="div">
                    {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                     {space} Spaces Available
            </Typography>
                        
            <Button variant="contained">Book APPOINMENT</Button>

    </Paper>             
        </Grid>
    );
};

export default Booking;