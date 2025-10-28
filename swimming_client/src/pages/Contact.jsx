import React from 'react';
import { Container, Typography, TextField, Grid, Button, Paper } from '@mui/material';

const Contact = () => (
   <Container maxWidth="md" sx={{ py: 8, minHeight: '52vh' }}>
    <Typography variant="h3" fontWeight={900}>צור קשר</Typography>
    <Paper sx={{ p: 3, mt: 3 }}>
      <Grid container spacing={2} component="form" onSubmit={(e) => e.preventDefault()}>
        <Grid item xs={12} sm={6}><TextField label="שם" fullWidth required /></Grid>
        <Grid item xs={12} sm={6}><TextField label="אימייל" type="email" fullWidth required /></Grid>
        <Grid item xs={12}><TextField label="הודעה" fullWidth multiline rows={4} /></Grid>
        <Grid item xs={12}><Button variant="contained">שליחה</Button></Grid>
      </Grid>
    </Paper>
    <Typography sx={{ mt: 2 }}>בריכת ___, באר שבע • חניה חופשית</Typography>
    <iframe title="map" style={{ border: 0, width: '100%', height: 300, marginTop: 16 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed?pb="></iframe>
  </Container>
);

export default Contact;