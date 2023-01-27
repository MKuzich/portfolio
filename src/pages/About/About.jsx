import { Container, Stack } from '@mui/material';
import { SummarySection } from 'components/SummarySection/SummarySection';
import { TechSection } from 'components/TechSection/TechSection';
import { EducationSection } from 'components/EducationSection/EducationSection';
import { WorkSection } from 'components/WorkSection/WorkSection';

const About = () => {
  return (
    <section>
      <Container
        sx={{
          pt: {
            xxs: '20vmin',
            xs: '15vmin',
            lg: '18vmin',
          },
          pb: {
            xxs: '40vmin',
            sm: '20vmin',
            lg: '18vmin',
          },
          px: {
            xxs: '5vw',
            xs: '10vw',
            lg: '80px',
          },
        }}
      >
        <Stack direction="column" gap={{ xxs: 8, sm: 12, lg: 20 }}>
          <SummarySection />
          <TechSection />
          <EducationSection />
          <WorkSection />
        </Stack>
      </Container>
    </section>
  );
};

export default About;
