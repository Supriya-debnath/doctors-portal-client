import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        alert('Login Successfully');
        e.preventDefault();
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
                onChange={handleOnchange}
                variant="standard" 
                />
                <TextField
                sx={{width: '75%', m: 2}} 
                id="standard-basic" 
                label="Enter Password" 
                type="password"
                name="password"
                onChange={handleOnchange}
                variant="standard" 
                />
                <Button sx={{width: '75%', m: 2}} type='submit'  variant='contained'>
                    Login
                    </Button>
                    <NavLink
                    style={{textDecoration: 'none'}}
                    to="/register">
                    <Button variant="text">New User? please register </Button>
                    </NavLink>
                </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
                </Grid>
        </Container>
    );
};

export default Login;