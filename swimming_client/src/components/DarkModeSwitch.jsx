import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material/styles';

const DarkModeSwitch = ({ onToggle }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Tooltip title={isDark ? 'מצב בהיר' : 'מצב כהה'}>
      <IconButton color="inherit" onClick={onToggle} aria-label="toggle color mode">
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeSwitch;