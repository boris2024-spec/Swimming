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
    <Typography sx={{ mt: 2 }}>בריכת קאנטרי, באר שבע • חניה חופשית</Typography>
    <iframe title="map" style={{ border: 0, width: '100%', height: 300, marginTop: 16 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4365.686765391925!2d34.758469399999996!3d31.253082799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150265e94f81aaab%3A0x2ca8793c90a35436!2z0JrQu9GD0LEg0JrQsNC90YLRgNC4!5e1!3m2!1sru!2sil!4v1761691656115!5m2!1sru!2sil"></iframe>
  </Container>
);

export default Contact;