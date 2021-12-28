import { Grid, TextField, Typography,Button } from '@mui/material';
import React from 'react';
import login from "../../images/login.png"
const Login = () => {
    const handleLoginSubmit=e=>{
        e.preventDefault();
        alert("hellow")
    }
    return (
        <>
        <Grid container spacing={2}>
  <Grid item sx={{mt:8}} xs={12} md={6}>
        <Typography variant="body1" gutterBottom>
        Login
        </Typography>


        <form onSubmit={handleLoginSubmit}>
        <TextField id="standard-basic" sx={{width:"75%",m:1}} label="Your Email" variant="standard" />
        <TextField id="standard-basic"  sx={{width:"75%",m:1}} type="password" label="Your Password" variant="standard" />
        {/* <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> */}

        <Button sx={{width:"75%",m:1}} variant="contained" type="submit">Login</Button>
        </form>
   
  </Grid>
  <Grid item xs={12} md={6}>
      <img style={{widt:"100%"}} src={login} alt=""></img>
   
  </Grid>
 
</Grid>
      
        </>
    );
};

export default Login;