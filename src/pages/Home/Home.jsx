import { useState, useEffect } from 'react';
import { Box, Typography, Stack, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { IoFingerPrintOutline } from 'react-icons/io5';

import portrait from '../../images/portrait.webp';
import { links } from 'data/links';

const Home = () => {
  const [selectedLink, setSelectedLink] = useState(0);
  const [clickedOnScr, setClickedOnScr] = useState(false);
  const isMd = useMediaQuery('(min-width:900px)');

  useEffect(() => {
    const changeTitles = e => {
      if (e.target.nodeName !== 'A') {
        setClickedOnScr(!clickedOnScr);
      }
    };

    if (!isMd) {
      document.addEventListener('click', changeTitles);
    }

    return () => document.removeEventListener('click', changeTitles);
  }, [clickedOnScr, isMd]);

  return (
    <Box
      height="100vh"
      width="100vw"
      px={{ xxs: '3vw', sm: '5vw', md: '10vw', lg: '15vw', xl: '20vw' }}
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      <Stack zIndex={10}>
        {links.map(({ id, link, primary, secondary, color }) => (
          <Box key={id} sx={{ animation: 'bounceIn', animationDuration: '1s' }}>
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
              {selectedLink === id || (!isMd && clickedOnScr)
                ? secondary
                : primary}
            </Typography>
          </Box>
        ))}
      </Stack>
      {!isMd && (
        <Stack
          position="absolute"
          bottom="10vh"
          zIndex={10}
          left="50%"
          color="secondary.light"
          direction="row"
          alignItems="center"
          gap={1}
          sx={{ transform: 'translateX(-50%)' }}
        >
          <Typography color="inherit" fontSize="calc(1em + 0.75vmin)">
            Tap anywhere
          </Typography>
          <IoFingerPrintOutline />
        </Stack>
      )}
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
