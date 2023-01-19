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
      fontWeight: 700,
    },
    body2: {
      fontSize: '0.75rem',
      fontStyle: 'italic ',
    },
  },
});
