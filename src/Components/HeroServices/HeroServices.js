import React from 'react';
import { Box, Grid2, Typography } from "@mui/material";
import Doctor from '../../assests/Doctor.png';
import IconCard from "../IconCard/IconCard";
import Drugstore from '../../assests/Drugstore.png';
import Hospital from '../../assests/Hospital.png';
import Capsule from '../../assests/Capsule.png';
import Ambulance from '../../assests/Ambulance.png';

function HeroServices() {
  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid2
        container
        spacing={2}
        justifyContent="center"
      >
        <Grid2 item xs={12} sm={6} md={2.4}>
          <IconCard
            img={Doctor}
            title="Doctors"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={2.4}>
          <IconCard
            img={Drugstore}
            title="Labs"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={2.4}>
          <IconCard
            img={Hospital}
            title="Hospital"
            active={true}
            bgColor="#FAFBFE"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={2.4}>
          <IconCard
            img={Capsule}
            title="Medical Store"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={2.4}>
          <IconCard
            img={Ambulance}
            title="Ambulance"
            active={false}
            bgColor="#FAFBFE"
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default HeroServices;
