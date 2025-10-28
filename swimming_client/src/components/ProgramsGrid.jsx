import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import { programs } from '../data/site.js';

const ProgramsGrid = () => (
  <Grid container spacing={3}>
    {programs.map((p) => (
      <Grid item xs={12} md={3} key={p.id}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Icon sx={{ fontSize: 36, mb: 1 }}>{p.icon}</Icon>
            <Typography variant="h6" fontWeight={800}>{p.title}</Typography>
            <Typography sx={{ mt: 1 }}>{p.desc}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default ProgramsGrid;