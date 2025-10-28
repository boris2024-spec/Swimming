import React, { useState } from 'react';
import { Container, TextField, Grid, Button, Paper, Typography, Alert } from '@mui/material';

const Register = () => {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight={900}>טופס רישום</Typography>
      <Paper sx={{ p: 3, mt: 3 }}>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}><TextField label="שם מלא" fullWidth required /></Grid>
            <Grid item xs={12} sm={6}><TextField label="טלפון" type="tel" fullWidth required /></Grid>
            <Grid item xs={12}><TextField label="אימייל" type="email" fullWidth required /></Grid>
            <Grid item xs={12}><TextField label="גיל/רמה" fullWidth /></Grid>
            <Grid item xs={12}><TextField label="הערות" fullWidth multiline rows={3} /></Grid>
            <Grid item xs={12}><Button type="submit" variant="contained" fullWidth>שליחה</Button></Grid>
          </Grid>
        </form>
        {sent && <Alert sx={{ mt: 2 }} severity="success">תודה! פנייתך התקבלה ונחזור אליך בהקדם.</Alert>}
      </Paper>
    </Container>
  );
};

export default Register;