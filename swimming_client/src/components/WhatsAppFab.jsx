import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppFab = () => (
  <Tooltip title="צ'אט בוואטסאפ">
    <Fab href="https://wa.me/972500000000" target="_blank" color="success" aria-label="whatsapp" sx={{ position: 'fixed', bottom: 24, left: 24, zIndex: 1400 }}>
      <WhatsAppIcon />
    </Fab>
  </Tooltip>
);

export default WhatsAppFab;