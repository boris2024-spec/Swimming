import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { stats } from '../data/site.js';

const StatsStripe = () => (
  <Box sx={{ py: 4, background: (t) => t.palette.mode==='light' ? t.palette.secondary.main : t.palette.primary.main, color: 'white' }}>
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {stats.map((s) => (
          <Grid key={s.label} item xs={6} md={3}>
            <Paper elevation={0} sx={{ textAlign: 'center', bgcolor: 'transparent', color: 'inherit' }}>
              <Typography variant="h3" fontWeight={900}>{s.value}</Typography>
              <Typography>{s.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default StatsStripe;