import { IconButton, useMediaQuery } from '@mui/material';
import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const BackButton = () => {
  const isMd = useMediaQuery('(min-width:900px)');
  return (
    <IconButton
      sx={{
        position: 'fixed',
        top: '5vmin',
        right: '5vmin',
        color: '#fff',
        '&': { transition: 'color 300ms' },
        '&:hover': { color: '#8bc34a' },
      }}
      component={Link}
      to="/"
    >
      <HiHome size="4vmin" />
    </IconButton>
  );
};
