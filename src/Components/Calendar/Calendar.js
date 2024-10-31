import SelectDay from "./SelectDay";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "./TimeSlotPicker";

export default function Calendar({ availableSlots, details, handleBooking }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box>
      {/* <SelectDay
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      /> */}
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
