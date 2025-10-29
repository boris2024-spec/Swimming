import React from 'react';
import { Box, Container, Grid, Link, Typography, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 8, py: 6, bgcolor: 'background.paper', borderTop: (t) => `1px solid ${t.palette.divider}` }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={800}>הפועל באר שבע שחייה</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              בית מקצועי לשחיינים בכל הגילים והרמות. אימוני איכות, צוות מנוסה ואווירה משפחתית.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={800}>קישורים</Typography>
            <Stack spacing={1} sx={{ mt: 1 }}>
              <Link href="/about">אודות</Link>
              <Link href="/register">רישום</Link>
              <Link href="/schedule">לוח זמנים</Link>
              <Link href="/pricing">מחירים</Link>
              <Link href="/contact">צור קשר</Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={800}>צור קשר</Typography>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
              <PhoneIcon fontSize="small" />
              <Typography>08-0000000</Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <IconButton
                aria-label="facebook"
                component="a"
                href="https://www.facebook.com/p/%D7%A7%D7%91%D7%95%D7%A6%D7%AA-%D7%94%D7%A4%D7%95%D7%A2%D7%9C-%D7%91%D7%90%D7%A8-%D7%A9%D7%91%D7%A2-%D7%A9%D7%97%D7%99%D7%99%D7%94-100028021075453/?locale=he_IL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="instagram"
                component="a"
                href="https://www.instagram.com/hbs_swimming7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
        <Typography variant="caption" display="block" sx={{ mt: 4, opacity: 0.8 }}>
          © {new Date().getFullYear()} הפועל באר שבע — שחייה. כל הזכויות שמורות.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;