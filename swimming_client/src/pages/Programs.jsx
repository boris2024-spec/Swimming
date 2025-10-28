import React from 'react';
import { Container } from '@mui/material';
import SectionTitle from '../components/SectionTitle.jsx';
import ProgramsGrid from '../components/ProgramsGrid.jsx';

const Programs = () => (
  <Container maxWidth="lg" sx={{ py: 8, minHeight: '52vh' }}>
    <SectionTitle title="מסלולים" subtitle="בחרו את המסלול שמתאים לכם" />
    <ProgramsGrid />
  </Container>
);

export default Programs;