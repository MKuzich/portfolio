import { Container, Box, Tabs, Tab } from '@mui/material';
import { AddProjectForm } from 'components/AddProjectForm/AddProjectForm';
import { TabPanel } from 'components/TabPanel/TabPanel';
import { useTabPanel } from 'hooks/useTabPanel';

const Admin = () => {
  const { value, handleChange, a11yProps } = useTabPanel();

  return (
    <section>
      <Container mt={20}>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: 'background.paper',
            display: 'flex',
            height: 96,
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
            }}
          >
            <Tab label="Add project" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <AddProjectForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Box>
      </Container>
    </section>
  );
};

export default Admin;
