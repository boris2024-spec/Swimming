import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const rows = [
  { day: 'א׳', time: '17:00–18:00', group: 'מתחילים ילדים' },
  { day: 'ב׳', time: '18:00–19:00', group: 'נוער מתקדמים' },
  { day: 'ד׳', time: '19:00–20:00', group: 'בוגרים' },
];

const Schedule = () => (
  <Container maxWidth="md" sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={900} sx={{ mb: 3 }}>לוח זמנים</Typography>
    <Grid container spacing={2}>
      {rows.map((r, i) => (
        <Grid item xs={12} md={6} key={i}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={800}>{r.group}</Typography>
              <Typography sx={{ mt: 0.5 }}>{r.day} • {r.time}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Schedule;