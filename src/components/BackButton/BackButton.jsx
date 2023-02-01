import { IconButton, useMediaQuery } from '@mui/material';
import { HiHome, HiArrowCircleLeft } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

export const BackButton = () => {
  const isMd = useMediaQuery('(min-width:900px)');
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

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
      to={backLink}
    >
      {backLink === '/' ? (
        <HiHome size={isMd ? '2.25rem' : '1.75rem'} />
      ) : (
        <HiArrowCircleLeft size={isMd ? '2.25rem' : '1.75rem'} />
      )}
    </IconButton>
  );
};
