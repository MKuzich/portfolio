import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 420,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#bef67a',
      main: '#8bc34a',
      dark: '#5a9216',
      contrastText: '#212121',
    },
    custom: {
      light: 'rgba(66, 66, 66, 0.3)',
      lightSecondary: 'rgba(139, 195, 74, 0.3)',
    },
  },
  typography: {
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Ubuntu',
      fontSize: '1.5rem',
      color: '#424242',
    },
    body2: {
      fontSize: '0.75rem',
      fontStyle: 'italic ',
    },
    h1: { fontFamily: 'Ubuntu', fontWeight: 700, fontSize: '2.75rem' },
    h2: {
      fontFamily: 'Ubuntu',
      fontWeight: 700,
      rotate: '180deg',
      writingMode: 'vertical-rl',
      backgroundClip: 'text !important',
      WebkitBackgroundClip: 'text !important',
      color: 'transparent',
    },
    h3: {
      lineHeight: 1,
      fontFamily: 'Ubuntu',
      fontSize: '2rem',
      fontWeight: 700,
      color: '#5a9216',
    },
    h4: {
      fontFamily: 'Ubuntu',
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    homeLink: {
      display: 'inline',
      fontFamily: 'Ubuntu',
      fontWeight: 700,
      lineHeight: 1,
      color: '#fff',
    },
  },
});

// font-family: 'Ubuntu', sans-serif;400 700

// font-family: 'Open Sans', sans-serif; 400 700 900
// font-family: 'Raleway', sans-serif;
// font-family: 'Roboto', sans-serif;
