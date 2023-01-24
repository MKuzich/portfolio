import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#6d6d6d',
      main: '#424242',
      dark: '#1b1b1b',
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
  },
});
