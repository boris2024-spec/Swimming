import React from 'react';
import { Container } from '@mui/material';
import SectionTitle from '../components/SectionTitle.jsx';
import CoachesGrid from '../components/CoachesGrid.jsx';

const Coaches = () => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    <SectionTitle title="המאמנים" subtitle="הכירו את הצוות שמוביל את ההצלחה" />
    <CoachesGrid />
  </Container>
);

export default Coaches;