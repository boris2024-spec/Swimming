import React from 'react';
import { Stack, Typography } from '@mui/material';

const SectionTitle = ({ kicker, title, subtitle }) => (
  <Stack spacing={1} sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
    {kicker && <Typography variant="overline" sx={{ opacity: 0.8 }}>{kicker}</Typography>}
    <Typography variant="h4" fontWeight={900}>{title}</Typography>
    {subtitle && <Typography color="text.secondary">{subtitle}</Typography>}
  </Stack>
);

export default SectionTitle;