"use client";

import { createTheme } from '@mui/material/styles';

export const pastelColors = {
  lightBlue: '#a2d2ff',
  lightGreen: '#c7f3d6',
  lightPink: '#ffb3d9',
  lightYellow: '#fdfd96',
  lightLavender: '#d0b0ff',
  lightPeach: '#ffadad',
};

const theme = createTheme({
  palette: {
    primary: {
      main: pastelColors.lightBlue,
    },
    secondary: {
      main: pastelColors.lightGreen,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: pastelColors.lightLavender, 
          borderRadius: '10px', 
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', 
        },
      },
    },
  },
});

export default theme;
