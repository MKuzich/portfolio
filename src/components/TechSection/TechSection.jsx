import { Box, Stack, Typography, Tooltip } from '@mui/material';
import { tech } from 'data/tech';

export const TechSection = () => {
  return (
    <Stack ml={{ md: '20%' }} direction="column" gap={{ xxs: 2, md: 4, lg: 6 }}>
      <Stack direction="row" alignItems="center" gap={{ xxs: 1, lg: 2 }}>
        <Stack flexShrink={0} direction="row" alignItems="end" gap={1}>
          <Typography
            fontSize={{
              xxs: '20px',
              xs: '22px',
              md: '24px',
              lg: '26px',
            }}
            variant="number"
          >
            02.
          </Typography>
          <Typography
            flexShrink={0}
            fontSize={{
              xxs: '14px',
              xs: '16px',
              md: '18px',
              lg: '20px',
            }}
            variant="title1"
          >
            Tech skills
          </Typography>
        </Stack>
        <Box
          sx={{
            mt: 2,
            mb: 1,
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, #484848, transparent 90%)',
          }}
        />
      </Stack>
      <Stack direction="row" gap={{ xxs: 3, md: 2, lg: 4 }} flexWrap="wrap">
        {tech.map(({ title, icon: Icon }) => (
          <Tooltip key={title} title={title} placement="top">
            <Box
              sx={{
                color: '#fff',
                '&': { transition: 'color 300ms' },
                '&:hover': { color: '#8bc34a' },
              }}
            >
              <Icon size="3.5rem" />
            </Box>
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  );
};
