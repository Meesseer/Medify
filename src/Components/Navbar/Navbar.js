import styles from "./Navbar.module.css"
import {
    Box,
    Container,
    Button,
    List,
    ListItem,
    Stack,
    Typography,
    useMediaQuery,
    IconButton,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import logo from "../../assests/logo.png"
  import { useState } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import MenuIcon from "@mui/icons-material/Menu";
  
  export default function NavBar() {
    const isMobile = useMediaQuery("(max-width:900px)");
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <header>
        <Box sx={{background: "#2AA7FF"}}>
          <Typography fontSize={14} textAlign="center">
            The health and well-being of our patients and their health care team
            will always be our priority, so we follow the best practices for
            cleanliness.
          </Typography>
        </Box>
  
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <Link to="/">
              <img src={logo} alt="Logo" height={27} />
            </Link>
  
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems={{ xs: "flex-start", md: "center" }}
              pt={{ xs: 12, md: 1 }}
              pb={{ xs: 4, md: 1 }}
              px={{ xs: 4, md: 0 }}
            >
              <a>Find Doctors</a>
              <a>Hospitals</a>
              <a>Medicines</a>
              <a>Surgeries</a>
              <a>Software for Provider</a>
              <a>Facilities</a>
                <Link to="/mybookings">
                <Button variant="contained" disableElevation>
                  My Bookings
                </Button>
                </Link>
  
              {isMobile && (
                <IconButton
                  onClick={() => setMenuOpen(false)}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 32,
                    color: "#ffff",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Stack>
  
            {isMobile && (
              <IconButton onClick={() => setMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Container>
      </header>
    );
  }
  