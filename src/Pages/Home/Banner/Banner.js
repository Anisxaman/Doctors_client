import React from 'react';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png"

import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';


const Banner = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
            <Typography sx={{mx:2}} variant="h3">
                Your New Smile <br/>
                Starts Here 

            </Typography>
            <Typography  variant="h6" sx={{fontSize:14,mx:2}} >
                Aliquyam rebum stet sadipscing et sanctus et magna clita lorem tempor. Labore erat et duo justo aliquyam sit kasd at.
            </Typography >
            <Button  variant="contained" sx={{mx:2,bgcolor: 'info.main' }} style={{color:"white"}}>Get appoinment</Button>
        </Grid>
        <Grid item xs={12} md={7}>
            <img src={chair} alt="" />
        </Grid>
       
      </Grid>
    </Box>
            
        </div>
    );
};

export default Banner;