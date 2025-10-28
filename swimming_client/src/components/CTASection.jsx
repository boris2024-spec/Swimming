import React from 'react';
import { Box, Container, Stack, Typography, Button } from '@mui/material';

const CTASection = () => (
  <Box sx={{ py: 6, background: (t) => `linear-gradient(90deg, ${t.palette.primary.main}, ${t.palette.secondary.main})`, color: 'white' }}>
    <Container maxWidth="lg">
      <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={2}>
        <Typography variant="h5" fontWeight={900}>רוצים להצטרף לחוג? ההרשמה פתוחה!</Typography>
        <Button size="large" variant="contained" color="inherit" href="/register">להרשמה עכשיו</Button>
      </Stack>
    </Container>
  </Box>
);

export default CTASection;