import React from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert, AlertTitle } from '@mui/material';
import login from '../../../images/login.png';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Contexts/useAuth/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, resisterUser, isLoading, authError} = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData};
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // alert('Register Successfully');
        if(loginData.password !== loginData.password2){
            alert('Password did not match. Please try again');
             return
        }
        resisterUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt: 8}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Register
                </Typography> 
                { !isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width: '75%', m: 2}}
                id="standard-basic" 
                label="Enter Name" 
                name="name"
                type="text"
                onBlur={handleOnBlur}
                variant="standard" 
                />
                <TextField 
                sx={{width: '75%', m: 2}}
                id="standard-basic" 
                label="Enter Email" 
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard" 
                />
                <TextField
                sx={{width: '75%', m: 2}} 
                id="standard-basic" 
                label="Enter Password" 
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard" 
                />
                <TextField
                sx={{width: '75%', m: 2}} 
                id="standard-basic" 
                label="Confirm Password" 
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard" 
                />
                <Button sx={{width: '75%', m: 2}} type='submit'  variant='contained'>
                    Resister
                    </Button>
                    <NavLink
                    style={{textDecoration: 'none'}}
                    to="/login">
                    <Button variant="text">Already Register? Please Login </Button>
                    </NavLink>
                </form>}
                {isLoading && <CircularProgress color="success" />}
                {user?.email && <Alert severity="success">
                    <AlertTitle>Successfully</AlertTitle>
                    User Created Resister Successfully
                    </Alert>}
                {authError && <Alert severity="error">
                    <AlertTitle>User Created Resister is Error</AlertTitle>
                    {authError}
                    </Alert>}    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
                </Grid>
        </Container>
    );
};

export default Register;