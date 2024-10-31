import React from 'react';
import { 
    Box,  
    Stack, 
    Typography,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,
 } 
from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Faqimg from '../../assests/faqs-banner.jpg';


function Faq() {
  

  return (
    <Box mt="4">
        <Container>
            <Box>
                <Typography
                component="h2"
                fontSize={20}
                color="#2AA7FF"
                fontWeight={600}  
                textAlign="center"
                marginTop={3}
                >
                    Get Your Answer
                </Typography>
                <Typography
                component="h1"
                fontSize={40}
                color="#1B3C74"
                fontWeight={1000}  
                textAlign="center"
                >
                    Frequently Asked Questions
                </Typography>
            </Box>
            <Stack sx={{color: "2AA7FF"}} direction={{ xs: "column", md: "row" }} alignItems="center" spacing={10}>
                <Box
                    component="img"
                    sx={{
                        height: 500,
                        width: 700,
                    }}
                    alt="Patient Care image"
                    src={Faqimg}
                />
                <Box>
                    {['Why choose our medical for your family?', 'Why we are different from others?', 'Trusted & experience senior care & love', 'How to get appointment for emergency cases?'].map((question, index) => (
                        <Accordion key={index} sx={{ mb: 2, boxShadow: 'none', border: 'none' }}>
                            <AccordionSummary
                                expandIcon={<AddIcon sx={{ color: '#2AA7FF' }} />}
                                aria-controls={`panel${index + 1}-content`}
                                id={`panel${index + 1}-header`}
                            >
                                <Typography 
                                    fontSize={20}
                                    fontWeight={700}  
                                    textAlign="center"
                                    color="#1B3C74"
                                >
                                    {question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Stack>
        </Container>
    </Box>
  )
}

export default Faq;
