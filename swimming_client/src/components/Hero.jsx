import React from 'react';
import { Box, Container, Typography, Button, Stack, Paper, useTheme } from '@mui/material';

const Hero = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Box sx={{
      background: (t) => `linear-gradient(180deg, ${t.palette.primary.main} 0%, ${t.palette.secondary.main} 100%)`,
      color: 'white',
      py: { xs: 8, md: 5 },
      mt: -8,
      textAlign: 'center',
    }}>
      <img
        src="/img/Screenshot 2.PNG"
        alt="Logo"
        style={{
          display: 'block',
          margin: '0 auto',
          borderRadius: '50%',
          width: '57%', // По умолчанию 100% ширины
          maxWidth: '440px', // Максимальная ширина для ПК
        }}
        className="responsive-img"
      />

      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ opacity: 0.9 }}>מאמנים אלופים • קהילה חזקה</Typography>
        <Typography
          fontWeight={900}
          sx={{ mt: 1, fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' } }}
        >
          מצטרפים לחוג השחייה של <br /> הפועל באר שבע
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, opacity: 0.95 }}>
          אימונים מקצועיים לילדים, נוער ובוגרים. קבוצות לפי רמות, מתקנים מעולים ותחרויות.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            href="/register"
            sx={{
              bgcolor: isLight ? 'grey.900' : 'grey.100',
              color: isLight ? 'white' : 'black',
              '&:hover': {
                bgcolor: isLight ? 'grey.800' : 'grey.300',
              },
            }}
          >
            להרשמה מהירה
          </Button>
          <Button variant="outlined" color="inherit" href="/about">למידע נוסף</Button>
        </Stack>
        <Paper elevation={4} sx={{ mt: 6, mx: 'auto', p: 3, maxWidth: 900, bgcolor: 'background.paper', color: 'text.primary' }}>
          <Typography variant="subtitle1" fontWeight={800}>מדוע לבחור בנו?</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            צוות מאמנים מנוסה, יחס אישי, דגש על טכניקה נכונה וביטחון במים. הצטרפו למשפחה המנצחת!
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Hero;