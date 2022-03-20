import { CircularProgress } from '@mui/material';
import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import useAuth from '../../../Contexts/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <CircularProgress color="success" />
    }

    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;