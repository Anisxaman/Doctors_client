import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from "../../../images/doctor.png"
import appointmentbg from "../../../images/appointment-bg.png"


const appoinment={
    background:`url(${appointmentbg})`,
    marginTop:175,
    backgroundColor:"rgba(51, 51, 55,0.9)",
    backgroundBlendMode:"darken, luminosity",

}


const AppoinmentBanner = () => {
    return (
        <>
           <Container>
           <Typography  variant="h4" sx={{textAlign:'center',my:5}} >This is appoinment</Typography>
            <Box style={appoinment} sx={{ flexGrow: 1 }}>
            <Box style={{}} >
                        <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{width:400,marginTop:"-110px"}} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}  sx={{ 
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign:"left",
                    flexDirection: 'column',
                    
                    alignItems:"flex-start"
                    
                    
                    }}>
                    <Typography variant="h6" sx={{mt:5}} style={{color:"#44D5CA",fontSize:14}}>Appoinment</Typography>
                
                    <Typography variant="h6"sx={{mt:5}} style={{color:"white"}}>Make an Appoinment Today</Typography>
                    <Typography variant="h6" style={{color:"white",fontSize:14,fontWeight:300}}>Justo duo ea magna clita nonumy no, et rebum dolor dolores et, sea amet rebum sed est dolor at sit.</Typography>
                    <Button sx={{my:5}}  variant="contained">Learn more</Button>
                </Grid>
       
      </Grid>
                </Box>
    
    </Box>
           </Container>
        </>
    );
};

export default AppoinmentBanner;