import { Stack, Typography, Box } from '@mui/material';
import profile from '../../images/profile.jpg';
import { ContactsSection } from 'components/ContactsSection/ContactsSection';

export const SummarySection = () => {
  return (
    <Stack direction="row">
      <Stack gap={1}>
        <Typography textAlign="justify" sx={{ textIndent: '5%' }}>
          Hi, my name is{' '}
          <span style={{ color: '#5a9216', fontWeight: 700 }}>
            Mykhailo Kuzich
          </span>
          . I am an open-minded Full Stack developer with strong analytical
          thinking, good in learning new technologies looking for a full-time
          position.
        </Typography>
        <Typography textAlign="justify" sx={{ textIndent: '5%' }}>
          My native language - is Ukrainian, and my secondary - is English at an
          intermediate level.
        </Typography>
        <Typography textAlign="justify" sx={{ textIndent: '5%' }}>
          I have vast experience in managing a big team, problem-solving, making
          important technical decisions,analyzing and working with large volumes
          of technical documentation, planning my workflow and the workflow for
          my team.
        </Typography>
        <Typography textAlign="justify" sx={{ textIndent: '5%' }}>
          I focus on JavaScript, React.js and Node.js now.
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Stack direction="row">
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
              letterSpacing="1px"
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
              About me
            </Typography>
          </Box>
        </Stack>
        <ContactsSection />
      </Stack>
    </Stack>
  );
};
