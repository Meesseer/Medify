import React from 'react';
import { Box, Grid2, Typography,Button,Container } from "@mui/material";
import IconCard from '../IconCard/IconCard';
import Drugstore from "../../assests/Drugstore.png"
import stethoscope from "../../assests/Stethoscope.png"
import HeartRate from "../../assests/HeartRate.png"
import HeartRateMonitor from "../../assests/HeartRateMonitor.png"
import BloodSample from "../../assests/Blood Sample.png"
import immune from "../../assests/Immune.png"
import xray from "../../assests/X-Ray.png"

function Specialisation() {
  return (
    <Box sx={{background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"}}>
    <Container sx={{ textAlign: 'center' }}>
      <Typography
        component="h1"
        fontSize={30}
        color="#1B3C74"
        fontWeight={1000}  
        textAlign="center"
        mb={8}
      > Find By Specialisation
    </Typography>
    <Grid2
        container
        spacing={8}
        justifyContent="center"
      >
        <Grid2 item xs={12} sm={6} md={8}>
          <IconCard
            img={Drugstore}
            title="Dentistry"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={8}>
          <IconCard
            img={stethoscope}
            title="Primary Care"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={8}>
          <IconCard
            img={HeartRate}
            title="Cardiology"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={8}>
          <IconCard
            img={HeartRateMonitor}
            title="MRI Resonance"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={8}>
          <IconCard
            img={BloodSample}
            title="Blood Test"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={8}>
          <IconCard
            img={immune}
            title="Psychologist"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={8}>
          <IconCard
            img={Drugstore}
            title="Laboratory"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={8}>
          <IconCard
            img={xray}
            title="X-Ray"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
      </Grid2>
      <Button sx={{mt: 4, mb: 4}} variant='contained' size="Small" disableElevation>
        View All
        </Button>
    </Container>
    </Box>
  )
}

export default Specialisation