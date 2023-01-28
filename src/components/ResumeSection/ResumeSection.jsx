import {
  Stack,
  Typography,
  Box,
  Tooltip,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { VscDesktopDownload } from 'react-icons/vsc';

export const ResumeSection = () => {
  const isMd = useMediaQuery('(min-width:900px)');

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
            05.
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
            CV link
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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height={300}
      >
        <Tooltip title="Сurrent CV" placement="top">
          <IconButton
            sx={{
              color: '#fff',
              '&': { transition: 'color 300ms' },
              '&:hover': { color: '#8bc34a' },
            }}
            component="a"
            target="_blank"
            href="https://drive.google.com/file/d/15kxgTrC-Tz-EesL5hbF3saJhHNnIXzM3/view?usp=sharing"
          >
            <VscDesktopDownload size={isMd ? '5rem' : '4rem'} />
          </IconButton>
        </Tooltip>
      </Box>
    </Stack>
  );
};
