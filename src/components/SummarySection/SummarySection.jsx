import {
  Stack,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { summary } from 'data/summary';
import { localContacts } from 'data/contacts';
import { TiContacts } from 'react-icons/ti';

export const SummarySection = () => {
  const isMd = useMediaQuery('(min-width:900px)');
  const isSm = useMediaQuery('(min-width:600px)');

  return (
    <Stack direction="column" gap={{ xxs: 2, md: 4, lg: 6 }}>
      <Stack direction="row" alignItems="center" gap={{ xxs: 1, lg: 2 }}>
        <Stack
          direction="row"
          alignItems="end"
          gap={1}
          sx={{ animation: 'headShake 2s linear infinite' }}
        >
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
        <Stack
          direction={{ xxs: 'column', sm: 'row' }}
          alignItems={{ xxs: 'end', sm: 'center' }}
          justifyContent="end"
          gap={{ xxs: 0, sm: 2 }}
          width="100%"
        >
          {localContacts.map(({ title, icon: Icon, link }) => (
            <Stack key={title} direction="row" alignItems="center" gap="1vmin">
              <IconButton
                sx={{
                  color: '#fff',
                  '&': { transition: 'color 300ms' },
                  '&:hover': { color: '#8bc34a' },
                }}
                component="a"
                target="_blank"
                href={link}
              >
                <Icon size={isMd ? '1.5rem' : '1.25rem'} />
              </IconButton>
              <Typography
                fontSize={{
                  xxs: '12px',
                  xs: '14px',
                  md: '16px',
                  lg: '18px',
                }}
              >
                {title}
              </Typography>
            </Stack>
          ))}
          <Stack
            component={Link}
            to="/contacts"
            direction="row"
            alignItems="center"
            gap="1vmin"
          >
            <IconButton
              sx={{
                color: '#fff',
                '&': { transition: 'color 300ms' },
                '&:hover': { color: '#8bc34a' },
              }}
            >
              <TiContacts size={isMd ? '1.5rem' : '1.25rem'} />
            </IconButton>
            {!isSm && (
              <Typography
                fontSize={{
                  xxs: '12px',
                  xs: '14px',
                  md: '16px',
                  lg: '18px',
                }}
              >
                Other contacts
              </Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
