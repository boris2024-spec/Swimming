import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const plans = [
  { title: 'חוג חודשי', price: '₪500', features: ['2 אימונים בשבוע', 'ביטוח ספורט', 'קבוצות לפי רמה'] },
  { title: 'חוג של נבחרת', price: '₪550', features: ['עד 4 אימונים בשבוע', 'ביטוח ספורט', 'תמיכה אישית'] },
  { title: 'אימונים אישיים', price: '₪—', features: ['ע"פ בדיקות המאמן', 'תחרויות', 'תוכנית אישית'] },
];

const Pricing = () => (
   <Container maxWidth="md" sx={{ py: 8, minHeight: '52vh' }}>
    <Typography variant="h3" fontWeight={900} sx={{ mb: 3 }}>מחירים</Typography>
    <Grid container spacing={3}>
      {plans.map((p) => (
        <Grid item xs={12} md={4} key={p.title}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={800}>{p.title}</Typography>
              <Typography variant="h3" fontWeight={900} sx={{ my: 1 }}>{p.price}</Typography>
              {p.features.map((f) => (
                <Typography key={f}>• {f}</Typography>
              ))}
              <Button fullWidth variant="contained" sx={{ mt: 2 }} href="/register">להצטרפות</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Pricing;