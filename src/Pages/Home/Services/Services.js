import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import  cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'


const services = [
    {
        name: "Fluoride Treatment",
        description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "Symptoms typically happen when a cavity is more developed, so you may not notice a cavity until it’s too late. you may be able to reverse the tooth decay and it may not be necessary to fill the cavity",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Many times, your Natural Teeth Whitening will be a part of a comprehensive plan to bring your smile back to life.usually recommends Teeth Whitening treatment before any Cosmetic dental treatment.",
        img: whitening
    }
]


const Services = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }}variant="h5" component="div">
          OUR SERVICES
        </Typography>
      <Typography sx={{ fontWeight: 500, m: 3 }} variant="h4" component="div">
          Services We Provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service => <Service
            key={service.name}
            service={service}
            ></Service>)
        }
      </Grid>
      </Container>
    </Box>
    );
};

export default Services;