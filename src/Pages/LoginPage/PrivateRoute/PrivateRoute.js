import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';

const PrivateRoute = ({ children}) => {
    let {user,isloading} = useAuth();
    const location= useLocation();
    console.log("from private:",location);
    if(isloading){
        return <CircularProgress/>
    }

    if(user.email){
        return children;
    }
    return  <Navigate
              to={{
                pathname: "/login",
            //    state: { from: location }
              }
         
            }              
               replace state= {{ from: location} }

            />


            
    // return (
    //     <Route
       
    //     render={({ location }) =>
    //       user.email ? (
    //         children
    //       ) : (
    //         <Navigate
    //           to={{
    //             pathname: "/login",
    //             state: { from: location }
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );
};

export default PrivateRoute;