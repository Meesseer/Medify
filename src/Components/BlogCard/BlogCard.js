import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Cardimg from "../../assests/Cardimg.png"
import { Stack, Box } from '@mui/material';
import DoctorIcon from "../../assests/doctoricon.png"

export default function BlogCard() {
  return (
    <Card sx={{ maxWidth: 400}}>
        <CardMedia
          component="img"
          height="300"
          image={Cardimg}
          alt="green iguana"
        />
        <CardContent>
          <Typography color='#77829D' gutterBottom variant="h6" component="div">
            Medical | March 31, 2022
          </Typography>
          <Typography 
            fontSize={20}
            color="#1B3C74"
            fontWeight={1000}  
            textAlign="left">
          6 Tips To Protect Your Mental Health When You’re Sick
          </Typography>
          <Stack direction='row'>
            <Box
                component='img'
                src={DoctorIcon}
                width={30}
                mr={2}
            />
            <Typography mt="2"color='#1B3C74' gutterBottom variant="h6" component="div">
            Rebecca Lee
          </Typography>
          </Stack>
        </CardContent>
    </Card>
  );
}