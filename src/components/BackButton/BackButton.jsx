import { IconButton, useMediaQuery } from '@mui/material';
import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const BackButton = () => {
  const isMd = useMediaQuery('(min-width:900px)');

  return (
    <IconButton
      sx={{
        zIndex: 2000,
        position: 'fixed',
        top: '4vh',
        right: '4vw',
        color: '#fff',
        '&': { transition: 'color 300ms' },
        '&:hover': { color: '#8bc34a' },
      }}
      component={Link}
      to="/"
    >
      <HiHome size={isMd ? '2.25rem' : '1.75rem'} />
    </IconButton>
  );
};
