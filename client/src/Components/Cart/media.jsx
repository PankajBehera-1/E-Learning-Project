import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

const FullPageSkeleton = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={2} sx={{ width: '80%', maxWidth: '1200px' }}>
        {/* Header Skeleton */}
        <Grid item xs={12}>
          <Skeleton variant="text" width="60%" height={40} />
        </Grid>

        {/* Course Items Skeleton */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid container spacing={2}>
              {Array.from(new Array(3)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <Skeleton variant="rectangular" width="100%" height={118} />
                    <Box sx={{ mt: 2 }}>
                      <Skeleton variant="text" width="80%" />
                      <Skeleton variant="text" width="60%" />
                      <Skeleton variant="text" width="40%" />
                      <Skeleton variant="text" width="30%" />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Total Price Skeleton */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
            <Skeleton variant="text" width="20%" height={40} />
            <Skeleton variant="rectangular" width="30%" height={40} />
          </Box>
        </Grid>

        {/* Checkout Button Skeleton */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Skeleton variant="rectangular" width="100%" height={50} />
        </Grid>

        {/* Promotion and Klarna Skeleton */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="rectangular" width="100%" height={50} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default FullPageSkeleton;
