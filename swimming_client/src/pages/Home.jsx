import React from 'react';
import { Container, Box, MenuList } from '@mui/material';
import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import StatsStripe from '../components/StatsStripe.jsx';
import ProgramsGrid from '../components/ProgramsGrid.jsx';
import CoachesGrid from '../components/CoachesGrid.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FAQ from '../components/FAQ.jsx';
import CTASection from '../components/CTASection.jsx';
import WhatsAppFab from '../components/WhatsAppFab.jsx';
import CookieConsent from '../components/CookieConsent.jsx';

const Home = () => (
  <>
    <Hero />
    <StatsStripe />

    

    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle kicker="מה בתוכנית" title="מסלולים וקבוצות" subtitle="התאמה לפי גיל ורמה" />
      <ProgramsGrid />
    </Container>

    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionTitle kicker="הצוות שלנו" title="מאמנים מקצועיים" subtitle="נסיון תחרותי והדרכתי" />
        <CoachesGrid />
      </Container>
    </Box>

    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle kicker="מדברים עלינו" title="המלצות הורים" />
      <Testimonials />
    </Container>

    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle title="שאלות נפוצות" />
      <FAQ />
    </Container>

    <CTASection />
    <WhatsAppFab />
    <CookieConsent />
  </>
);

export default Home;