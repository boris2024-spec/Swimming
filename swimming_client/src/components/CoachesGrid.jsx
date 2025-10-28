import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Stack } from '@mui/material';
import { coaches } from '../data/site.js';

const CoachesGrid = () => (
  <Grid container spacing={3}>
    {coaches.map((c) => (
      <Grid item xs={12} md={4} key={c.id}>
        <Card>
          <CardMedia component="img" image={c.img} height={260} alt={c.name} />
          <CardContent>
            <Stack>
              <Typography variant="h6" fontWeight={800}>{c.name}</Typography>
              <Typography variant="subtitle2" color="text.secondary">{c.role}</Typography>
              <Typography sx={{ mt: 1 }}>{c.bio}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default CoachesGrid;