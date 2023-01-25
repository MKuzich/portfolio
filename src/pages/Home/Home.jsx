import { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedLink, setSelectedLink] = useState(0);

  return (
    <Box height="100vh" width="100vw" py={14} px={30}>
      <Stack>
        <Box>
          <Typography
            component={Link}
            variant="homeLink"
            to="/about"
            onMouseEnter={() => setSelectedLink(1)}
            onMouseLeave={() => setSelectedLink(0)}
            sx={{ '&:hover': { pl: 8 } }}
          >
            {selectedLink === 1 ? 'About' : 'Hi!'}
          </Typography>
        </Box>
        <Box>
          <Typography
            component={Link}
            variant="homeLink"
            to="/projects"
            onMouseEnter={() => setSelectedLink(2)}
            onMouseLeave={() => setSelectedLink(0)}
            sx={{ '&:hover': { pl: 8 }, color: 'secondary.main' }}
          >
            {selectedLink === 2 ? 'Projects' : 'I am'}
          </Typography>
        </Box>
        <Box>
          <Typography
            component={Link}
            variant="homeLink"
            to="/contacts"
            onMouseEnter={() => setSelectedLink(3)}
            onMouseLeave={() => setSelectedLink(0)}
            sx={{ '&:hover': { pl: 8 }, color: 'secondary.main' }}
          >
            {selectedLink === 3 ? 'Contacts' : 'Mykhailo'}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
export default Home;
