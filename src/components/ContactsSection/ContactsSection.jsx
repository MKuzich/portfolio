import { Box, Stack, Typography, IconButton } from '@mui/material';
import { webContacts, localContacts } from 'data/contacts';

export const ContactsSection = () => {
  return (
    <Stack direction="row" justifyContent="end" gap={0.5}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="transparent"
      >
        <Typography
          letterSpacing="-3px"
          textAlign="end"
          fontSize="2.125rem"
          lineHeight={1}
          variant="h2"
          component="h2"
          sx={{
            background:
              'linear-gradient(to right, rgba(66, 66, 66, 0.5), rgba(66, 66, 66, 0.01))',
          }}
        >
          Contacts
        </Typography>
      </Box>
      <Stack direction="row" gap={1}>
        <Stack>
          {localContacts.map(({ title, icon: Icon, link }) => (
            <Stack key={title} direction="row" alignItems="center">
              <IconButton component="a" target="_blank" href={link}>
                <Icon size="1.75rem" />
              </IconButton>
              <Typography sx={{ textTransform: 'none' }} ml={2}>
                {title}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Stack direction="row" gap={0.5} flexWrap="wrap" width={132}>
          {webContacts.map(({ title, icon: Icon, link }) => (
            <IconButton key={title} component="a" target="_blank" href={link}>
              <Icon size="3rem" />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
