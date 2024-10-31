import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import BlogCard from '../BlogCard/BlogCard';

function Blog() {
  return (
    <Box>
        <Typography
        component="h1"
        fontSize={20}
        color="#2AA7FF"
        fontWeight={600}
        mt={4}  
        textAlign="center">
            Blog & News 
        </Typography>
        <Typography
        component="h1"
        fontSize={40}
        color="#1B3C74"
        fontWeight={1000}  
        textAlign="center">
            Read Our Latest News
        </Typography>
        <Grid2
          container
          spacing={2}
          justifyContent="center"
        >
          <Grid2 item xs={12} sm={6} md={2.4}>
            <BlogCard/>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={2.4}>
            <BlogCard/>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={2.4}>
            <BlogCard/>
          </Grid2>
        </Grid2>
        
    </Box>
  )
}

export default Blog