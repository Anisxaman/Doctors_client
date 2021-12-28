import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Home/Service/Service';
import fluride from "../../images/fluoride.png"
import cavity from "../../images/cavity.png"
import whitening from "../../images/whitening.png"
import Typography from '@mui/material/Typography';


const services=[
    {
        name:"Fluoride Treatment",
        description:"Eirmod sanctus sadipscing invidunt diam et rebum dolores tempor aliquyam, takimata at aliquyam et accusam voluptua voluptua ipsum dolores. Amet.",
        img: fluride


    },
    {
        name:"cavity Treatment",
        description:"Eirmod sanctus sadipscing invidunt diam et rebum dolores tempor aliquyam, takimata at aliquyam et accusam voluptua voluptua ipsum dolores. Amet.",
        img: cavity


    },
    {
        name:"whitening Treatment",
        description:"Eirmod sanctus sadipscing invidunt diam et rebum dolores tempor aliquyam, takimata at aliquyam et accusam voluptua voluptua ipsum dolores. Amet.",
        img: whitening

    }
]


const Services = () => {
    return (
        <>
       <Container>
       <Typography sx={{ textAlign: 'center',fontWeight: 'bold', my:2 }} variant="h5" color="text.success.main" gutterBottom>
          Our Services
        </Typography>
       <Typography  sx={{ textAlign: 'center', my:5 }} variant="h4" color="text.warning" gutterBottom>
          Services we Provide
        </Typography>
       <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {services.map((service, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                    <Service
                    service={service}
                    key={service.name}

                    ></Service>
                    

                    
                </Grid>
                ))}
            </Grid>
            </Box>
       </Container>
            
        </>
    );
};

export default Services;