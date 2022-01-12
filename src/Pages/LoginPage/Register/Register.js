import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';
import login from "../../../images/login.png"

const Register = () => {

    const [loginData, setloginData] = useState({})

    const {registerUser}=useAuth();
   
    const handleLoginSubmit=e=>{
        if(loginData.password!==loginData.password2){
            alert("Your password doesn't match");
            return

        }
        // console.log(loginData);
        registerUser(loginData?.email,loginData?.password);
        e.preventDefault();
        alert("hellow")
    }



    const handleOnChange=e=>{


    const field=e.target.name;
    const value=e.target.value;
    // console.log(field,value);
                    // field bolte text field ar name k bujai
    const newLoginData={...loginData};
    newLoginData[field]=value;
    // field name onushare value ta bosai dea
    setloginData(newLoginData);

}

// console.log(loginData);



    return (
        <>
        <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
        <Typography  variant="h4" sx={{fontWeight: 'bold'}} gutterBottom>
        Register
        </Typography>


        <form onSubmit={handleLoginSubmit}>
                <TextField id="standard-basic" sx={{width:"75%",m:1}} name="email" 
                onBlur={handleOnChange} type="email" label="Your Email" variant="standard" />


                <TextField id="standard-basic"  sx={{width:"75%",m:1}} type="password"  onBlur={handleOnChange} name="password" label="Your Password" variant="standard" />


                <TextField id="standard-basic"  sx={{width:"75%",m:1}} type="password"  onBlur={handleOnChange} name="password2" label="Retype Your Password" variant="standard" />
        {/* <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> */}
        <Button sx={{width:"75%",m:1}} variant="contained" type="submit">Register</Button>
        <NavLink style={{textDecoration:"none"}} to="register"><Button variant="text">already registered?Please Login</Button></NavLink>

        </form>
   
  </Grid>
  <Grid item xs={12} md={6}>
      <img style={{widt:"100%"}} src={login} alt=""></img>
   
  </Grid>
 
</Grid>
      
        </>
    );
};

export default Register;