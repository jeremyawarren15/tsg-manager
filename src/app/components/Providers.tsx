'use client';

import { ThemeProvider, createTheme, lighten } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

const customColors = {
  brunswickGreen: '#344E41',
  hunterGreen: '#3A5A40',
  fernGreen: '#588157',
  sage: '#A3B18A',
  timberwolf: '#DAD7CD',
};

const theme = createTheme({
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: customColors.sage,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: lighten(customColors.timberwolf, 0.3), // Example background color
        },
      },
    },
  },
  palette: {
    // @ts-ignore
    customColor: {
      brunswickGreen: customColors.brunswickGreen,
      hunterGreen: customColors.hunterGreen,
      fernGreen: customColors.fernGreen,
      sage: customColors.sage,
      timberwolf: customColors.timberwolf,
    },
    primary: {
      main: customColors.hunterGreen,
    },
    background: {
      paper: lighten(customColors.timberwolf, 0.2),
      default: customColors.timberwolf,
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: '2.125rem',
    },
    h2: {
      fontSize: '1.75rem', // Equivalent to approximately 25px
    },
    h3: {
      fontSize: '1.5rem', // Equivalent to approximately 21px
    },
    h4: {
      fontSize: '1.25rem', // Equivalent to approximately 18px
    },
    h5: {
      fontSize: '1.125rem', // Equivalent to approximately 16px
    },
    h6: {
      fontSize: '1rem', // Equivalent to the base font size
    },
    subtitle1: {
      fontSize: '0.875rem', // Smaller for less prominent details
    },
    body1: {
      fontSize: '1rem', // Base font size
    },
    body2: {
      fontSize: '0.875rem', // Slightly smaller than the base font size
    },
    button: {
      fontSize: '0.875rem', // Typically smaller, as button text is often bold
    },
    caption: {
      fontSize: '0.75rem', // Small text, like captions
    },
    overline: {
      fontSize: '0.625rem', // Even smaller text, often used for overlines
    },
  },
});

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={null}>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Provider;