import { Typography, Stack, IconButton, useMediaQuery } from '@mui/material';
import { TbExternalLink } from 'react-icons/tb';

export const ProjectLink = ({ link, text }) => {
  const isMd = useMediaQuery('(min-width:900px)');
  return (
    <Stack direction="row" alignItems="center">
      <Typography>{text}</Typography>
      <IconButton
        component="a"
        href={link}
        target="_blank"
        sx={{
          flexShrink: 0,
          color: '#fff',
          '&': { transition: 'color 300ms' },
          '&:hover': { color: '#8bc34a' },
          verticalAlign: 'top',
        }}
      >
        <TbExternalLink size={isMd ? '1.25rem' : '1rem'} />
      </IconButton>
    </Stack>
  );
};
