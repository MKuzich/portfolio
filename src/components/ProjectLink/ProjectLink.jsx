import { Button, useMediaQuery } from '@mui/material';
import { TbExternalLink } from 'react-icons/tb';

export const ProjectLink = ({ link, text }) => {
  const isMd = useMediaQuery('(min-width:900px)');
  return (
    <Button
      component="a"
      variant="outlined"
      href={link}
      target="_blank"
      endIcon={<TbExternalLink size={isMd ? '1.25rem' : '1rem'} />}
      color="secondary"
      sx={{
        flexShrink: 0,
        '&': { transition: 'color 300ms' },
        '&:hover': { color: '#8bc34a' },
        verticalAlign: 'center',
        alignItems: 'center',
      }}
    >
      {text}
    </Button>
  );
};
