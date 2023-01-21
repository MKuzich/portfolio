import {
  Container,
  Box,
  Tabs,
  Tab,
  Stack,
  Button,
  Typography,
  Divider,
} from '@mui/material';
import { TabPanel } from 'components/TabPanel/TabPanel';
import { useTabPanel } from 'hooks/useTabPanel';
import { education } from 'data/education';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { SummarySection } from 'components/SummarySection/SummarySection';
import { ContactsSection } from 'components/ContactsSection/ContactsSection';
import { TechSection } from 'components/TechSection/TechSection';

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
            <Tab label="Editional education" {...a11yProps(4)} />
          </Tabs>
          <Stack direction="column" gap={2}>
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
              <Stack direction="row">
                <Typography
                  letterSpacing="-3px"
                  textAlign="end"
                  fontSize="7rem"
                  lineHeight={1}
                  variant="h2"
                  component="h2"
                >
                  Education
                </Typography>
                <Stack direction="row" gap={2} flexWrap="wrap">
                  {education.map(
                    ({ company, place, speciality, period, image }) => (
                      <Box
                        display="flex"
                        width="100%"
                        justifyContent="space-between"
                        alignItems="start"
                        key={company + speciality}
                      >
                        <Stack width="100%" gap={2}>
                          <Typography variant="h3">{company}</Typography>
                          <Divider />
                          <Stack gap={0.5}>
                            <Stack
                              direction="row"
                              gap={0.5}
                              alignItems="center"
                            >
                              <Typography>{period}</Typography>
                              <HiOutlineLocationMarker size="1rem" />
                              <Typography>{place}</Typography>
                            </Stack>
                            <Typography variant="h4">{speciality}</Typography>
                          </Stack>
                        </Stack>
                        <Button sx={{ width: '200px', flexShrink: 0 }}>
                          <img
                            src={image}
                            alt={speciality}
                            style={{ height: 'auto', width: '100%' }}
                          />
                        </Button>
                      </Box>
                    )
                  )}
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={4} oneRender={false}>
              Item Two
            </TabPanel>
          </Stack>
        </Box>
      </Container>
    </section>
  );
};
export default Home;
