import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let {user,isloading} = useAuth();
    const location=useLocation();
    if(isloading){
        return <CircularProgress/>
    }

    if(user.email){
        return children;
    }
    return  <Navigate
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
    // return (
    //     <Route
    //     {...rest}
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