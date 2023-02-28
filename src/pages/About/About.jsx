import { Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { SummarySection } from 'components/SummarySection/SummarySection';
import { TechSection } from 'components/TechSection/TechSection';
import { EducationSection } from 'components/EducationSection/EducationSection';
import { WorkSection } from 'components/WorkSection/WorkSection';
import { BackButton } from 'components/BackButton/BackButton';
import { ResumeSection } from 'components/ResumeSection/ResumeSection';

const About = () => {
  return (
    <section>
      <BackButton />
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
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SummarySection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <TechSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <EducationSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <WorkSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ResumeSection />
          </motion.div>
        </Stack>
      </Container>
    </section>
  );
};

export default About;
