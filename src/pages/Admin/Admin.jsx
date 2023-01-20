import { Container, Box, Tabs, Tab } from '@mui/material';
import { AddProjectForm } from 'components/AddProjectForm/AddProjectForm';
import { useState } from 'react';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ px: 5 }}>{children}</Box>}
    </div>
  );
}

const Admin = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
    };
  }
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
            // variant="scrollable"
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
