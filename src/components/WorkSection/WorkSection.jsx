import { Box, Stack, Typography } from '@mui/material';

import { work } from 'data/work';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { TbPoint } from 'react-icons/tb';

export const WorkSection = () => {
  return (
    <Stack direction="row" gap={2}>
      <Stack direction="row" gap={2} flexWrap="wrap">
        {work.map(
          ({ position, company, from, to, location, responsibilities }) => (
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              alignItems="start"
              border={1}
              borderColor="custom.light"
              borderRadius={3}
              px={2}
              py={4}
              key={company + position}
            >
              <Stack width="100%">
                <Typography variant="h3">
                  {position}
                  <span
                    style={{ fontWeight: 400, color: '#424242' }}
                  >{` at `}</span>
                  {company}
                </Typography>

                <Box
                  sx={{
                    mt: 2,
                    mb: 1,
                    width: '100%',
                    height: '1px',
                    background:
                      'linear-gradient(to right, rgba(66, 66, 66, 0.5), transparent 90%)',
                  }}
                />
                <Stack gap={1}>
                  <Stack direction="row" gap={0.5} alignItems="center">
                    <Typography mr={1}>
                      {from}
                      {' - '}
                      {to}
                    </Typography>
                    <HiOutlineLocationMarker size="1.5rem" />
                    <Typography>{location}</Typography>
                  </Stack>
                  <ul>
                    {responsibilities.map(res => (
                      <li
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                        }}
                        key={company + res}
                      >
                        <TbPoint />
                        <Typography>{res}</Typography>
                      </li>
                    ))}
                  </ul>
                </Stack>
              </Stack>
            </Box>
          )
        )}
      </Stack>
      <Typography
        letterSpacing="-3px"
        textAlign="end"
        fontSize="7rem"
        lineHeight={1}
        variant="h2"
        component="h2"
        sx={{
          background:
            'linear-gradient(to left, rgba(66, 66, 66, 0.5), rgba(66, 66, 66, 0.01))',
        }}
      >
        Work experience
      </Typography>
    </Stack>
  );
};
