import React from 'react'
import { Box,Button,Stack, Typography,Chip } from '@mui/material'
import hospitalicon from '../../assests/hospitalicon.png'
import thumbsup from "../../assests/thumbsup.png"
import ad from "../../assests/Ad.png"
import { useState } from 'react';
import { format } from "date-fns";
import Calendar from "../Calendar/Calendar"

function HospitalCard({hospital, handleBooking,availableSlots, booking=false  }) {
    const [showCalendar, setShowCalendar] = useState(false);

  return (
        <Box sx={{
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          padding: 2,
          width: '100%',
        }}>
        <Stack direction='row' >
            <Stack direction="row" spacing={2} alignItems="center">
            <Box
            component="img"
                    sx={{
                        height: 100,
                        width: 100,
                    }}
                    alt="Patient Care image"
                    src={hospitalicon}
            >
            </Box>
            <Box>
                <Typography
                    textTransform="capitalize"
                    sx={{
                        fontSize:16,
                        ml: 3,
                        mt: 4,
                        color: "#14BEF0",
                        fontWeight: "600",
                    }}
                >
                {hospital["Hospital Name"].toLowerCase()}

                </Typography>
                <Typography
                    textTransform="capitalize"
                    sx={{
                        
                        fontSize:13,
                        ml: 3,
                        color: "#414146",
                        fontWeight: "700"
                    }}>
                    {`${hospital["City"].toLowerCase()} , ${hospital["State"].toLowerCase()}`}
                </Typography>
                <Typography
                    textTransform="capitalize"
                    sx={{
                        
                        fontSize:13,
                        ml: 3,
                        color: "#414146",
                        fontWeight: "400"
                    }}>
                    {`${hospital["Hospital Type"].toLowerCase()}`}
                </Typography>
            <Stack direction="row" spacing={1}>
            {!booking && (
    <Stack direction="row" spacing={1} alignItems="center" ml={3}>
        <Box>
            <Typography
                textTransform="capitalize"
                sx={{
                    fontSize: 13,
                    color: "#02A401",
                    fontWeight: "700",
                }}
            >
                Free
            </Typography>
        </Box>
        <Box>
            <Typography
                sx={{
                    fontSize: 13,
                    textDecoration: "line-through", 
                    color: "#787887",
                }}
            >
                ₹500
            </Typography>
        </Box>
        <Box>
            <Typography
                sx={{
                    fontSize: 13,
                }}
            >
                Consultation fee at clinic
            </Typography>
        </Box>
    </Stack>
)}
                
                <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!booking && (
            <>
              <Typography
                textAlign="center"
                color="#02A401"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar((prev) => !prev)}
              >
                {!showCalendar
                  ? "Book FREE Center Visit"
                  : "Hide Booking Calendar"}
              </Button>
            </>
          )}

          {booking && (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={hospital.bookingTime}
                variant="outlined"
                color="Red"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                }}
              />
              <Chip
                label={format(new Date(hospital.bookingDate), "dd MMMM yyyy")}
                variant="outlined"
                color="#02A401"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                }}
              />
            </Stack>
          )}
        </Stack>
            </Stack>
            <Box
                component="img"
                sx={{
                    height: 25,
                    width: 40,
                    ml: 3,
                    mt: 1,
                }}
                alt="Patient Care image"
                src={thumbsup}
            >
            </Box>
            </Box>
            </Stack>
        </Stack>
        <Box>
        </Box>
        {showCalendar && (
        <Calendar
          details={hospital}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
        )}
    </Box>
  )
}

export default HospitalCard