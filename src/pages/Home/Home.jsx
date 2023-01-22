import { Container, Box, Tabs, Tab, Stack } from '@mui/material';
import { TabPanel } from 'components/TabPanel/TabPanel';
import { useTabPanel } from 'hooks/useTabPanel';
import { SummarySection } from 'components/SummarySection/SummarySection';
import { ContactsSection } from 'components/ContactsSection/ContactsSection';
import { TechSection } from 'components/TechSection/TechSection';
import { EducationSection } from 'components/EducationSection/EducationSection';

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
            height: 400,
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
            }}
          >
            <Tab label="Summary" {...a11yProps(0)} />
            <Tab label="Contacts" {...a11yProps(1)} />
            <Tab label="Tech skills" {...a11yProps(2)} />
            <Tab label="Education" {...a11yProps(3)} />
            <Tab label="Work expirience" {...a11yProps(4)} />
          </Tabs>
          <Stack direction="column" gap={4}>
            <TabPanel value={value} index={0} oneRender={false}>
              <SummarySection />
            </TabPanel>
            <TabPanel value={value} index={1} oneRender={false}>
              <ContactsSection />
            </TabPanel>
            <TabPanel value={value} index={2} oneRender={false}>
              <TechSection />
            </TabPanel>
            <TabPanel value={value} index={3} oneRender={false}>
              <EducationSection />
            </TabPanel>
            <TabPanel value={value} index={4} oneRender={false}>
              Work expirience
            </TabPanel>
          </Stack>
        </Box>
      </Container>
    </section>
  );
};
export default Home;
