import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
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
        // alert('Register Successfully');
        if(loginData.password !== loginData.password2){
            alert('Password did not match. Please try again');
        }
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt: 8}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Register
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
                <TextField
                sx={{width: '75%', m: 2}} 
                id="standard-basic" 
                label="Confirm Password" 
                type="password"
                name="password2"
                onChange={handleOnchange}
                variant="standard" 
                />
                <Button sx={{width: '75%', m: 2}} type='submit'  variant='contained'>
                    Login
                    </Button>
                    <NavLink
                    style={{textDecoration: 'none'}}
                    to="/login">
                    <Button variant="text">Already Register? Please Login </Button>
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

export default Register;