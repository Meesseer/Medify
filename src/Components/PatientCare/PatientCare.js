import { List,ListItemIcon,ListItemText, ListItem,Box, Container, Stack, Typography } from '@mui/material'
import React from 'react';
import Care from "../../assests/PatientCare.png";
import Listtick from "../../assests/Listtick.png"

function PatientCare() {
  return (
    <Box sx={{background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"}}>
        <Container>
            <Stack direction={{ xs: "column", md: "row" }} alignItems="center" spacing={10}>
            <Box
                component="img"
                sx={{
                    height: 500,
                    width:500 ,
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                }}
                alt="Patient Care image"
                src={Care}
                />
                <Box>
                    <Typography
                    component="h2"
                    fontSize={20}
                    color="#2AA7FF"
                    fontWeight={600}  
                    textAlign="left"
                    >
                        HELPING PATIENTS FROM AROUND THE GLOBE!!
                    </Typography>
                    <Typography
                    component="h1"
                    fontSize={40}
                    color="#1B3C74"
                    fontWeight={1000}  
                    textAlign="left"
                    >
                        Patient <Box component='span' color='#2AA7FF'>Caring</Box>
                    </Typography>
                    <Typography color='#77829D' lineHeight={1.8}>
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                    </Typography>
                    <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={Listtick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Stay Updated About Your Health'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={Listtick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Check Your Results Online'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={Listtick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Manage Your Appointments'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                        </List>
                </Box>
            </Stack>
                    
        </Container>
    </Box>
  )
}

export default PatientCare