import { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import portrait from '../../images/portrait.webp';

const links = [
  {
    id: 1,
    link: '/about',
    primary: 'Hi!',
    secondary: 'About',
    color: '#fff',
  },
  {
    id: 2,
    link: '/projects',
    primary: 'I am',
    secondary: 'Projects',
    color: 'secondary.main',
  },
  {
    id: 3,
    link: '/contacts',
    primary: 'Mykhailo',
    secondary: 'Contacts',
    color: 'secondary.main',
  },
];

const Home = () => {
  const [selectedLink, setSelectedLink] = useState(0);

  return (
    <Box
      height="100vh"
      width="100vw"
      px={{ xs: '2vw', sm: '5vw', md: '10vw', lg: '15vw', xl: '20vw' }}
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      <Stack zIndex={10}>
        {links.map(({ id, link, primary, secondary, color }) => (
          <Box key={id}>
            <Typography
              component={Link}
              variant="homeLink"
              to={link}
              onMouseEnter={() => setSelectedLink(id)}
              onMouseLeave={() => setSelectedLink(0)}
              sx={{
                fontSize: {
                  xxs: '20vmin',
                  xs: '15vmin',
                  lg: '18vmin',
                },
                '&:hover': { pl: 8 },
                color,
              }}
            >
              {selectedLink === id ? secondary : primary}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Box
        width="100vmax"
        height="100vh"
        position="absolute"
        left={{ xxs: '-15vw', xs: '5vw', sm: '15vw', md: '30vw', lg: '45vw' }}
        sx={{
          backgroundImage: `url(${portrait})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      ></Box>
    </Box>
  );
};
export default Home;
