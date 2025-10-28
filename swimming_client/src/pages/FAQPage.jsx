import React from 'react';
import { Container } from '@mui/material';
import SectionTitle from '../components/SectionTitle.jsx';
import FAQ from '../components/FAQ.jsx';

const FAQPage = () => (
   <Container maxWidth="md" sx={{ py: 8, minHeight: '52vh' }}>
    <SectionTitle title="שאלות ותשובות" />
    <FAQ />
  </Container>
);

export default FAQPage;