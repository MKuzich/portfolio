import { Stack, Typography, Box } from '@mui/material';
import { summary } from 'data/summary';

export const SummarySection = () => {
  return (
    <Stack direction="column" gap={{ xxs: 2, md: 4, lg: 6 }}>
      <Stack direction="row" alignItems="center" gap={{ xxs: 1, lg: 2 }}>
        <Stack direction="row" alignItems="end" gap={1}>
          <Typography
            fontSize={{
              xxs: '20px',
              xs: '22px',
              md: '24px',
              lg: '26px',
            }}
            variant="number"
          >
            01.
          </Typography>
          <Typography
            fontSize={{
              xxs: '14px',
              xs: '16px',
              md: '18px',
              lg: '20px',
            }}
            variant="title1"
          >
            Summary
          </Typography>
        </Stack>
        <Box
          sx={{
            mt: 2,
            mb: 1,
            width: { xxs: '100%', md: '50vw', xl: '70%' },
            height: '1px',
            background: 'linear-gradient(to right, #484848, transparent 90%)',
          }}
        />
      </Stack>
      <Stack
        width={{ xxs: '100%', md: '80%' }}
        gap={{ xxs: 0.5, md: 1, lg: 2 }}
      >
        {summary.map((par, idx) => (
          <Typography
            key={'summary' + idx}
            fontSize={{
              xxs: '12px',
              xs: '14px',
              md: '16px',
              lg: '18px',
            }}
            textAlign="justify"
          >
            {par}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};
