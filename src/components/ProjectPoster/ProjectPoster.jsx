import { Button, Box, Typography, Chip, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export const ProjectPoster = ({ poster, name, id, tech }) => {
  const location = useLocation();

  return (
    <Button
      component={Link}
      to={`/projects/${id}`}
      state={{ from: location }}
      sx={{
        position: 'relative',
        backgroundImage: `url(${poster})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top left',
        borderRadius: 4,
        height: '100%',
        width: '100%',
        p: 0,
        overflow: 'hidden',
        filter: 'grayscale(1)',
        '&': { transition: 'all 500ms' },
        '&:hover': {
          boxShadow: '0px 0px 35px -7px rgba(255,255,255,0.5)',
          filter: 'grayscale(0)',
        },
        '&:hover > div': {
          opacity: 1,
          bottom: 0,
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          bottom: '-300px',
          width: '100%',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgba(255,255,255,0.7)',
          opacity: 0,
          transition: 'all 500ms',
        }}
      >
        <Typography variant="titleDesription">{name}</Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {tech.map(itm => (
            <Chip
              sx={{ color: '#fff', cursor: 'pointer' }}
              key={name + itm}
              color="secondary"
              size="small"
              label={itm}
            />
          ))}
        </Stack>
      </Box>
    </Button>
  );
};
