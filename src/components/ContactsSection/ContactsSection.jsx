import { Grid, useMediaQuery, IconButton, Box, Tooltip } from '@mui/material';
import { webContacts } from 'data/contacts';

export const ContactsSection = () => {
  const isMd = useMediaQuery('(min-width:900px)');
  return (
    <Box width={{ xxs: 168, xs: 256, md: 656 }}>
      <Grid container justifyContent="center" spacing={{ xxs: 1, md: 2 }}>
        {webContacts.map(({ title, icon: Icon, link }, idx) => (
          <Grid
            item
            xxs={6}
            xs={4}
            md={2}
            key={title}
            sx={{
              animation: 'bounceInDown',
              animationDuration: '200ms',
              animationDelay: `${idx * 200}ms`,
            }}
          >
            <Tooltip title={title} placement="top">
              <IconButton
                sx={{
                  color: '#fff',
                  '&': { transition: 'color 300ms' },
                  '&:hover': { color: '#8bc34a' },

                  opacity: 0,
                  animation: 'fadeIn',
                  animationDuration: '500ms',
                  animationDelay: `${idx * 200}ms`,
                  animationFillMode: 'forwards',
                }}
                component="a"
                target="_blank"
                href={link}
              >
                <Icon size={isMd ? '5rem' : '4rem'} />
              </IconButton>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
