import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqs } from '../data/site.js';

const FAQ = () => (
  <Stack>
    {faqs.map((f, i) => (
      <Accordion key={i}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={800}>{f.q}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{f.a}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Stack>
);

export default FAQ;