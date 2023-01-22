import { Box, Stack, Button, Typography } from '@mui/material';
import { contacts } from 'data/contacts';

export const ContactsSection = () => {
  return (
    <Stack direction="row">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="transparent"
      >
        <Typography
          letterSpacing="-3px"
          textAlign="end"
          fontSize="4rem"
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
      <ul>
        {contacts.map(({ title, icon: Icon, link }) => (
          <li key={title}>
            <Button
              component="a"
              target="_blank"
              href={link}
              sx={{ textDecoration: 'none' }}
            >
              <Icon size="1.5rem" />
              <Typography sx={{ textTransform: 'none' }} ml={2}>
                {title}
              </Typography>
            </Button>
          </li>
        ))}
      </ul>
    </Stack>
  );
};
