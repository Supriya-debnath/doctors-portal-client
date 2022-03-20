import React from 'react';
import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png';
import { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Contexts/useAuth/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, signInWithGoogle, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        // alert('Login Successfully');

        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = e => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt: 8}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Login
                </Typography> 
                <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width: '75%', m: 2}}
                id="standard-basic" 
                label="Enter Email" 
                name="email"
                type="email"
                onBlur={handleOnchange}
                variant="standard" 
                />
                <TextField
                sx={{width: '75%', m: 2}} 
                id="standard-basic" 
                label="Enter Password" 
                type="password"
                name="password"
                onBlur={handleOnchange}
                variant="standard" 
                />
                <Button sx={{width: '75%', m: 2}} type='submit'  variant='contained'>
                    Login
                    </Button>
                    <NavLink
                    style={{textDecoration: 'none'}}
                    to="/register">
                    <Button onClick={handleGoogleSignIn} variant="text">New User? please register </Button>
                    </NavLink>

                    {isLoading && <CircularProgress color="success" />}
                    {user?.email && <Alert severity="success">
                        <AlertTitle>Successfully</AlertTitle>
                        User Login Successfully
                        </Alert>}
                    {authError && <Alert severity="error">
                        <AlertTitle>User Login Error</AlertTitle>
                        {authError}
                    </Alert>}
                </form>
                <p>--------------------</p>
                  <Button variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
                </Grid>
        </Container>
    );
};

export default Login;