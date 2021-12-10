import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';



const Service = (props) => {
    const {name,description,img}=props.service;
    return (
        <div>
               <Grid item xs={4} sm={4} md={4}>
               <Card  sx={{ minWidth: 275, boxShadow: 0}}>


               <CardMedia
                    component="img"
                    style={{width:"auto",height:"80px",margin:"0 auto"}}
                    image={img}
                    alt="Paella dish"
                />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      
    </Card>
               
                    

                    
                </Grid>
            
        </div>
    );
};

export default Service;