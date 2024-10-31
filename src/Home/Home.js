import React from 'react'
import { Container, Box, Stack } from '@mui/material'
import NavBar from '../Components/Navbar/Navbar'
import Hero from '../Components/Herospace/Hero'
import HeroServices from '../Components/HeroServices/HeroServices'
import SearchHospital from '../Components/SearchHospital/SearchHospital'
import Offers from '../Components/Offers/offers'
import Specialisation from '../Components/Specialisation/Specialisation'
import MedicalSpecialist from '../Components/MedicalSpecialist/MedicalSpecialist'
import PatientCare from '../Components/PatientCare/PatientCare'
import Blog from '../Components/Blog/Blog'
import OurFamilies from '../Components/OurFamilies/OurFamilies'
import Faq from '../Components/FAQ/Faq'


function Home() {

  return (
    <div className='home'>
    <NavBar/>
    <Container maxWidth="xl">
          <Hero />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
          <SearchHospital/>
          <HeroServices/>
          </Stack>
    </Container>
          <Offers/>
          <Specialisation/>
          <MedicalSpecialist/>
          <PatientCare/>
          <Blog/>
          <OurFamilies/>
          <Faq />
    </div>
  )
}

export default Home

