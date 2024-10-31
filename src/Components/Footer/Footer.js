import React from 'react'
import { List,ListItemIcon,ListItemText, ListItem,Box, Stack, Typography } from '@mui/material'
import logo from "../../assests/logo.png";
import facebook from "../../assests/facebook.png"
import pintrest from "../../assests/pintrest.png"
import youtube from "../../assests/youtube.png"
import twitter from "../../assests/twitter.png"
import arrow from "../../assests/arrow.png"

function Footer() {
  return (
    <Box sx={{ background: "#1B3C74"}}>
        <Stack direction={{ xs: "column", md: "row"}}>
            <Box>
                <Box
                    component="img"
                    sx={{
                        height: 30,
                        width:100,
                        ml: 20,
                        mt: 4,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Patient Care image"
                    src={logo}
                    />
                <Box sx={{
                        mt: 8,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}>
                <Box
                    component="img"
                    sx={{
                        height: 30,
                        width:30,
                        ml: 20
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Patient Care image"
                    src={facebook}
                    />
                    <Box
                        component="img"
                        sx={{
                            height: 30,
                            width:30,
                            ml: 1,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="Patient Care image"
                        src={pintrest}
                        />
                    <Box
                    component="img"
                    sx={{
                        height: 30,
                        width:30,
                        ml: 1,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Patient Care image"
                    src={youtube}
                    />
                    <Box
                    component="img"
                    sx={{
                        height: 30,
                        width:30,
                        ml: 1,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Patient Care image"
                    src={twitter}
                    />
                </Box>
            </Box>
            <Box>
            <List sx={{ fontSize: { xs: 8, md: 14 }, ml:25, mt:3 }}>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='About Us'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: "#FFFFFF"}}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Our Pricing'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Our Gallery'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Appointment'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Privacy Policy'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
            </List>
            </Box>
            <Box>
            <List sx={{ fontSize: { xs: 8, md: 14 }, ml:25, mt:3 }}>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Orthology'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: "#FFFFFF"}}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Cardiology'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Opthalmology'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Dental Care'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Neurology'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
                </List>
            </Box>
            <Box>
            <List sx={{ fontSize: { xs: 8, md: 14 }, ml:25, mt:3 }}>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='About Us'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: "#FFFFFF"}}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Our Pricing'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Our Gallery'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Appointment'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 5, mr:1 }}>
                        <Box component='img' src={arrow} height={10} width={10} />
                    </ListItemIcon>
                    <ListItemText
                        primary='Privacy Policy'
                        primaryTypographyProps={{ fontSize: { xs: 8, md: 14 }, color: '#FFFFFF' }}
                    />
                </ListItem>
            </List>
            </Box>
        </Stack>
    </Box>
  )
}

export default Footer