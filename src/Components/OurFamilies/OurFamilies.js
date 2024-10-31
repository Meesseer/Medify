import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react';
import Family from "../../assests/Family.png"

function OurFamilies() {
  return (
    <Box mt="4" sx={{background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"}}>
        <Container>
            <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={10}>
                <Box>
                    <Typography
                    component="h2"
                    fontSize={20}
                    color="#2AA7FF"
                    fontWeight={600}  
                    textAlign="left"
                    >
                        CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                    </Typography>
                    <Typography
                    component="h1"
                    fontSize={40}
                    color="#1B3C74"
                    fontWeight={1000}  
                    textAlign="left"
                    >
                        Our Families
                    </Typography>
                    <Typography color='#77829D' lineHeight={1.8}>
                    We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                    </Typography>
                    
                </Box>
                <Box
                        component="img"
                        sx={{
                            height: 500,
                            width:500 ,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="Patient Care image"
                        src={Family}
                        />
            </Stack>
                    
        </Container>
    </Box>
  )
}

export default OurFamilies