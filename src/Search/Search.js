import React from 'react'
import { Box,Container, Typography, Stack } from '@mui/material'
import NavBar from '../Components/Navbar/Navbar';
import { useState } from 'react';
import SearchHospital from '../Components/SearchHospital/SearchHospital';
import { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import tick from "../assests/tick.png"
import HospitalCard from '../Components/HospitalCard/HospitalCard';
import Faq from '../Components/FAQ/Faq';
import Download from "../Components/Download/Download"
import Footer from "../Components/Footer/Footer"
import ad from "../assests/Ad.png"
import BookingModal from '../Components/BookingModal/BookingModal';
import AutohideSnackbar from '../Components/Snackbar/Snackbar';


function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchHospital, setSearchHospital] = useState([])
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [loading, setLoading] = useState(false);
  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  const getHospitals = async () => {
    setSearchHospital([])
    setLoading(true)
    try {
      const response = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
      const data = await response.json();
      console.log(data)
      setSearchHospital(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    if(state && city){
      getHospitals()
    }
  },[state,city])
  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  const handleBookingModal = (searchHospital) => {
    setBookingDetails(searchHospital);
    setIsModalOpen(true);
  };

  return (
    <Box> 
      <NavBar/>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '10vh',
          background: "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
        }}
      >
        <Box
          sx={{width: '80%'}}
        >
          <SearchHospital/>
        </Box>
      </Box>
      <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
        {searchHospital.length > 0 && (
          <Box sx={{ mb: 3 }}>
          <Typography
            component="h1"
            fontSize={24}
            lineHeight={1.1}
            mb={2}
            fontWeight={500}
          >
            {`${searchHospital.length} hospital is available in the city ${city.toLocaleLowerCase()}` }
            </Typography>
            <Stack direction="row" spacing={2}>
                <img src={tick} height={24} width={24} alt="icon" />
                <Typography color="#787887" lineHeight={1.4}>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Stack>
          </Box>
        )}
      <Stack direction="row" spacing={6}>
        <Box>
          {searchHospital.length > 0 &&(
            searchHospital.map((hospital)=>
              <HospitalCard 
                key={hospital["Hospital Name"]}
                hospital={hospital}
                handleBooking={handleBookingModal}
                availableSlots={availableSlots}
              />
            )
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
            {loading && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  Loading...
                </Typography>
              )}

              {!state && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  Please select a state and city
                </Typography>
              )}
            </Stack>
      </Container>
      <BookingModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          bookingDetails={bookingDetails}
          showSuccessMessage={setShowBookingSuccess}
        />
        <AutohideSnackbar
          open={showBookingSuccess}
          setOpen={setShowBookingSuccess}
          message="Booking Successful"
        />
      <Faq/>
      <Download />
      <Footer />
    </Box>
  )
}

export default Search
