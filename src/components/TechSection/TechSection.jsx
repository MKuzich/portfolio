import { Box, Stack, Typography } from '@mui/material';
import { tech } from 'data/tech';

export const TechSection = () => {
  return (
    <Stack direction="row">
      <Box
        display="flex"
        alignItems="start"
        justifyContent="start"
        color="transparent"
      >
        <Typography
          textAlign="end"
          letterSpacing="-7px"
          fontSize="9rem"
          lineHeight={0.67}
          component="h2"
          variant="h2"
        >
          Tech
          <br />
          <span
            style={{
              fontSize: '3rem',
              letterSpacing: '-2px',
            }}
          >
            skills
          </span>
        </Typography>
      </Box>
      <Stack direction="row" gap={1} flexWrap="wrap" justifyContent="end">
        {tech.map(({ title, icon: Icon }) => (
          <Box
            display="flex"
            gap={1.5}
            alignItems="center"
            border={1}
            borderRadius={2}
            borderColor="custom.light"
            bgcolor="custom.lightSecondary"
            color="primary.main"
            py={1}
            px={1.5}
            key={title}
          >
            <Icon size="1.5rem" />
            <Typography>{title}</Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
