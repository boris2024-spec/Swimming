import React from 'react';
import { Container, Grid, Card, CardMedia, Typography } from '@mui/material';

const demo = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/swim${i}/800/600`);

const Gallery = () => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={900} sx={{ mb: 3 }}>גלריה</Typography>
    <Grid container spacing={2}>
      {demo.map((src, i) => (
        <Grid item xs={6} md={4} key={i}>
          <Card>
            <CardMedia component="img" image={src} alt={`תמונה ${i + 1}`} />
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Gallery;