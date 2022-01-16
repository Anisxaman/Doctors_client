import { Grid, TextField, Typography,Button, Box, CircularProgress, Alert, AlertTitle } from '@mui/material';
import React,{ useState} from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import login from "../../images/login.png"
import Navigation from '../../Shared/Navigation/Navigation';
const Login = () => {


   const [loginData, setloginData] = useState({})
   const { loginUser,user,isloading, authError}=useAuth();
    const location= useLocation();
    const navigate = useNavigate();


console.log("location",location);
console.log("history",navigate);
   
    const handleLoginSubmit=e=>{

        loginUser(loginData.email,loginData.password,location,navigate);
       
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

console.log(loginData);


    return (
        <>
        <Navigation></Navigation>
        <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
        <Typography sx={{fontWeight: 'bold'}} variant="body1" gutterBottom>
        Login
        </Typography>


        <form onSubmit={handleLoginSubmit}>
                <TextField id="standard-basic" sx={{width:"75%",m:1}} name="email" 
                onBlur={handleOnChange} label="Your Email" variant="standard" />


                <TextField id="standard-basic"  sx={{width:"75%",m:1}} type="password"  onBlur={handleOnChange} name="password" label="Your Password" variant="standard" />
        {/* <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> */}
        <Button sx={{width:"75%",m:1}} variant="contained" type="submit">Login</Button>
        <NavLink style={{textDecoration:"none"}} to="/register"><Button variant="text">New User?Please Register</Button></NavLink>

        </form>
        {isloading &&  <Box sx={{ display: 'flex' ,alignItems:"center",justifyContent:"center"}}>
                                     <CircularProgress />
                    </Box>}
        {
            user?.email && <Alert severity="success">User login successfully</Alert>

        }
        {
            authError && <Alert sx={{textAlign: "center"}} severity="error">
            <AlertTitle>Error</AlertTitle>
            {authError}
          </Alert>

        }
   
  </Grid>
  <Grid item xs={12} md={6}>
      <img style={{widt:"100%"}} src={login} alt=""></img>
   
  </Grid>
 
</Grid>
      
        </>
    );
};

export default Login;