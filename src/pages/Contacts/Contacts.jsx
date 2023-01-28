import { Box } from '@mui/material';

import { ContactsSection } from 'components/ContactsSection/ContactsSection';
import { BackButton } from 'components/BackButton/BackButton';

const Contacts = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        margin: 'auto',
      }}
    >
      <BackButton />
      <ContactsSection />
    </Box>
  );
};

export default Contacts;
