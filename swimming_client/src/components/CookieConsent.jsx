import React from 'react';
import { Alert, Button, Snackbar } from '@mui/material';

const CookieConsent = () => {
  const [open, setOpen] = React.useState(() => !localStorage.getItem('cookies-ok'));
  const accept = () => { localStorage.setItem('cookies-ok', '1'); setOpen(false); };
  return (
    <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert severity="info" action={<Button color="inherit" size="small" onClick={accept}>אישור</Button>}>
        האתר משתמש בקבצי Cookies לשיפור החוויה.
      </Alert>
    </Snackbar>
  );
};

export default CookieConsent;