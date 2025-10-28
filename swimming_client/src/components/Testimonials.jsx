import React from 'react';
import { Grid, Card, CardContent, Typography, Rating } from '@mui/material';
import { testimonials } from '../data/site.js';

const Testimonials = () => (
  <Grid container spacing={3}>
    {testimonials.map((t) => (
      <Grid item xs={12} md={4} key={t.id}>
        <Card>
          <CardContent>
            <Rating value={t.rating} readOnly sx={{ mb: 1 }} />
            <Typography>“{t.text}”</Typography>
            <Typography variant="subtitle2" sx={{ mt: 1 }} color="text.secondary">— {t.name}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default Testimonials;