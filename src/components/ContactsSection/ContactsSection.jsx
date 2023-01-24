import { Stack, Typography, IconButton } from '@mui/material';
import { webContacts, localContacts } from 'data/contacts';

export const ContactsSection = () => {
  return (
    <Stack direction="column" p={1}>
      <Stack>
        {localContacts.map(({ title, icon: Icon, link }) => (
          <Stack key={title} direction="row" alignItems="center">
            <IconButton
              sx={{
                '&': { transition: 'color 300ms' },
                '&:hover': { color: '#8bc34a' },
              }}
              component="a"
              target="_blank"
              href={link}
            >
              <Icon size="1.75rem" />
            </IconButton>
            <Typography sx={{ textTransform: 'none' }} ml={1}>
              {title}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Stack direction="row" gap={1}>
        {webContacts.map(({ title, icon: Icon, link }) => (
          <IconButton
            key={title}
            sx={{
              '&': { transition: 'color 300ms' },
              '&:hover': { color: '#8bc34a' },
            }}
            component="a"
            target="_blank"
            href={link}
          >
            <Icon size="1.75rem" />
          </IconButton>
        ))}
      </Stack>
    </Stack>
  );
};
