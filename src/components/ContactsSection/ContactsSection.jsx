import { Grid, useMediaQuery, IconButton, Box, Tooltip } from '@mui/material';
import { webContacts } from 'data/contacts';

export const ContactsSection = () => {
  const isMd = useMediaQuery('(min-width:900px)');
  return (
    <Box width={{ xxs: 168, xs: 256, md: 656 }}>
      <Grid container justifyContent="center" spacing={{ xxs: 1, md: 2 }}>
        {webContacts.map(({ title, icon: Icon, link }) => (
          <Grid item xxs={6} xs={4} md={2} key={title}>
            <Tooltip title={title} placement="top">
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
                <Icon size={isMd ? '5rem' : '4rem'} />
              </IconButton>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
