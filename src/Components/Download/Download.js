import React from 'react';
import { 
    Box,  
    Stack, 
    Typography,
    Container,
    TextField,
    Button
 } 
from '@mui/material';
import mobile from '../../assests/mobile.jpg';
import vector from '../../assests/Vector.png'
import android from "../../assests/google_play.png" 
import apple from "../../assests/apple_store.png" 

function Download() {
  return (
    <Box mt="4" sx={{background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"}}>
        <Container>
            <Stack direction={{ xs: "column", md: "row" }} alignItems="center" spacing={10}>
                <Box
                    component="img"
                    sx={{
                        height: 400,
                        width: 700,
                    }}
                    alt="Patient Care image"
                    src={mobile}
                />
                <Box >
              <Stack direction="row">
                <Box
                    component="img"
                    
                    sx={{
                        height: 100,
                        width: 50,
                        mt: 5,
                        mr:2,
                    }}
                    alt="Patient Care image"
                    src={vector}
                />
                <Typography 
                fontSize={40}
                fontWeight={600}
                color='#1B3C74'
                >
                  Download The <Box component='span' color='#2AA7FF'>Medify</Box> App
                </Typography>
                </Stack>
                <Typography 
                fontSize={15}
                fontWeight={800}
                sx={{ ml: 7,mb:1 }}
                >
                  Get the link to download the app
                </Typography>
                <TextField 
                        id="outlined-basic" 
                        label="Enter your phone number" 
                        variant="outlined" 
                        sx={{ height: '3rem', width:'15rem',mb: 2, ml: 7}}
                    />
                    <Button 
                        variant="contained" 
                        sx={{ backgroundColor: '#2AA7FF', color: '#FFFFFF', ml: 2, height: '3.5rem', width:'9rem' }}
                    >
                        Send SMS
                    </Button>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={3} marginLeft={3}>
                        <Box
                        component="img"
                        
                        sx={{
                          height: 50,
                          width: 150,
                        }}
                        alt="Patient Care image"
                        src={android}
                    />
                        <Box
                        component="img"
                        
                        sx={{
                            height: 50,
                            width: 150,
                            mt: 4,
                        }}
                        alt="Patient Care image"
                        src={apple}
                    />
                    </Stack>
                </Box>
            </Stack>
        </Container>
    </Box>
  )
}

export default Download;