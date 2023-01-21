import { Stack, Typography } from '@mui/material';
import profile from '../../images/profile.jpg';

export const SummarySection = () => {
  return (
    <Stack direction="row">
      <Stack>
        <h1>Mykhailo Kuzich</h1>
        <Typography>
          I am an open-minded Full Stack developer with strong analytical
          thinking, good in learning new technologies looking for a full-time
          position. I have vast experience in managing a big team (more than 100
          people), problem-solving and making important technical decisions. I
          focus on JS, React and Node now
        </Typography>
      </Stack>
      <img src={profile} width={500} alt="Mykhailo Kuzich" />
    </Stack>
  );
};
