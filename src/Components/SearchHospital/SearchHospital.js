import React, { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Button,Box } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import { TextField, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function SearchHospital({search}) {
    const [states, setState] = useState([]);
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({
        states: "",
        city: "",
    })
    const navigate = useNavigate();

    const fetchState = async() => {
        try {
            const response = await axios.get("https://meddata-backend.onrender.com/states")
            // console.log(response.data)
            setState(response.data)
        } catch (error) {
            console.error(error)
        }
      };
      useEffect(() => {
        fetchState();
      }, []);

    const fetchCities = async () => {
        setCities([]);
      setFormData((prev) => ({ ...prev, city: "" }));
        try {
            const responseCity = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.states}`)
            console.log(responseCity.data)
            setCities(responseCity.data)
        } catch (error) {
            console.error(error)
        }
      };

    useEffect(()=>{
        if(formData.states !== " "){
            fetchCities()
        }
    },[formData.states])
    
    const handleChange = (e) => {
        const { name,value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/search?state=${formData.states}&city=${formData.city}`);
    }
  return (
      <Box component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}>
      <Select
        labelId="states"
        id="states"
        name="states"
        value={formData.states}
        label="states"
        onChange={handleChange}
        startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          States
        </MenuItem>
        {states.map((state)=>(
            <MenuItem key={state} value={state}>
                {state}
            </MenuItem>
        )) 
        }
        
        
      </Select>
      <Select
        labelId="city"
        id="city"
        name='city'
        value={formData.city}
        label="city"
        onChange={handleChange}
        startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          <em>city</em>
        </MenuItem>
        {cities.map((city) =>(
        <MenuItem key={city} value={city}>
            {city}
        </MenuItem>
        ))}
      </Select>
      <Button type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation>
            Search
        </Button>
      </Box>


    
  )
}

export default SearchHospital