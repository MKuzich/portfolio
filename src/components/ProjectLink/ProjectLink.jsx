import { Button, useMediaQuery } from '@mui/material';
import { TbExternalLink } from 'react-icons/tb';

export const ProjectLink = ({ link, text }) => {
  const isMd = useMediaQuery('(min-width:900px)');
  return (
    <Button
      component="a"
      href={link}
      target="_blank"
      endIcon={<TbExternalLink size={isMd ? '1.25rem' : '1rem'} />}
      sx={{
        flexShrink: 0,
        color: '#fff',
        '&': { transition: 'color 300ms' },
        '&:hover': { color: '#8bc34a' },
        verticalAlign: 'top',
      }}
    >
      {text}
    </Button>
  );
};
