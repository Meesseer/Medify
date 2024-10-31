import { Box,Typography, Stack } from '@mui/material';
import React from 'react';
import NavBar from '../Components/Navbar/Navbar';
import HospitalCard from '../Components/HospitalCard/HospitalCard';
import { useEffect, useState } from 'react';
import Faq from '../Components/FAQ/Faq';
import Download from '../Components/Download/Download';
import Footer from '../Components/Footer/Footer';
import ad from "../assests/Ad.png"

function MyBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const localBookings = localStorage.getItem("bookings") || "[]";
        setBookings(JSON.parse(localBookings));
    }, []);
    
    console.log(bookings);

    return (
        <Box>
            <NavBar />
        <Stack direction="row" spacing={6} sx={{ml: 15}}>
            <Box>
                {bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <HospitalCard 
                            key={booking["Hospital Name"]} 
                            hospital={booking}
                            booking={true} 
                            availableSlots={booking.availableSlots}
                        />
                    ))
                ) : (
                    <Typography>No bookings found.</Typography>
                )}
            </Box>
            <Box
                component="img"
                sx={{
                    height: 300,
                    width: 400,
                }}
                alt="Patient Care image"
                src={ad}
            >
            </Box>
        </Stack>
        <Faq/>
        <Download />
        <Footer />
        </Box>
    );
}

export default MyBookings;
