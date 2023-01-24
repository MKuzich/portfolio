import { Container, Box, Tabs, Tab, Stack } from '@mui/material';
import { TabPanel } from 'components/TabPanel/TabPanel';
import { useTabPanel } from 'hooks/useTabPanel';
import { SummarySection } from 'components/SummarySection/SummarySection';
import { TechSection } from 'components/TechSection/TechSection';
import { EducationSection } from 'components/EducationSection/EducationSection';
import { WorkSection } from 'components/WorkSection/WorkSection';

const Home = () => {
  const { value, handleChange, a11yProps } = useTabPanel();

  return (
    <section>
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: 'background.paper',
            display: 'flex',
          }}
        >
          <Tabs
            orientation="vertical"
            textColor="secondary"
            indicatorColor="secondary"
            value={value}
            onChange={handleChange}
            sx={{
              borderRight: 1,
              borderColor: 'divider',
              flexShrink: 0,
              position: 'sticky',
              top: '100px',
              height: 400,
            }}
          >
            <Tab label="About me" {...a11yProps(0)} />
            <Tab label="Tech skills" {...a11yProps(1)} />
            <Tab label="Education" {...a11yProps(2)} />
            <Tab label="Work expirience" {...a11yProps(3)} />
          </Tabs>

          <Stack direction="column" gap={10}>
            <TabPanel value={value} index={0} oneRender={false}>
              <SummarySection />
            </TabPanel>
            <TabPanel value={value} index={1} oneRender={false}>
              <TechSection />
            </TabPanel>
            <TabPanel value={value} index={2} oneRender={false}>
              <EducationSection />
            </TabPanel>
            <TabPanel value={value} index={3} oneRender={false}>
              <WorkSection />
            </TabPanel>
          </Stack>
        </Box>
      </Container>
    </section>
  );
};
export default Home;
