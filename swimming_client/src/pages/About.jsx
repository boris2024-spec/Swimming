import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => (
  <Container maxWidth="md" sx={{ py: 8, minHeight: '52vh' }}>
    <Typography variant="h3" fontWeight={900}>אודות</Typography>
    <Typography sx={{ mt: 2 }}>
      חוג השחייה של הפועל באר שבע פועל לקידום ענף השחייה בעיר ובאזור. המועדון מפעיל קבוצות ילדים, נוער ובוגרים, עם דגש על ערכים, מצוינות והנאה מהספורט.
    </Typography>
  </Container>
);

export default About;