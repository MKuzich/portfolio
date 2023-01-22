import { Stack, Typography, Box } from '@mui/material';
import profile from '../../images/profile.jpg';

export const SummarySection = () => {
  return (
    <Stack direction="row">
      <Stack gap={2}>
        <Typography component="h1" variant="h1">
          Mykhailo Kuzich
        </Typography>
        <Typography textAlign="justify" sx={{ textIndent: '20%' }}>
          I am an open-minded Full Stack developer with strong analytical
          thinking, good in learning new technologies looking for a full-time
          position. I have vast experience in managing a big team (more than 100
          people), problem-solving and making important technical decisions. I
          focus on JS, React.js and Node.js now.
        </Typography>
      </Stack>
      <Box position="relative" flexShrink={0}>
        <img src={profile} width={500} alt="Mykhailo Kuzich" />
        <Box
          position="absolute"
          width="100%"
          height="100%"
          top={0}
          sx={{
            background:
              'linear-gradient(to right, rgba(255, 255, 255) 0 2%, transparent 7% 80%, rgba(255, 255, 255) 100%)',
          }}
        ></Box>
      </Box>

      <Box
        display="flex"
        alignItems="end"
        justifyContent="center"
        color="transparent"
      >
        <Typography
          textTransform="uppercase"
          letterSpacing="5px"
          textAlign="end"
          fontSize="4rem"
          lineHeight={0.8}
          variant="h2"
          component="h2"
          sx={{
            background:
              'linear-gradient(to left, rgba(66, 66, 66, 0.5), rgba(66, 66, 66, 0.01))',
          }}
        >
          Summary
        </Typography>
      </Box>
    </Stack>
  );
};
