import { Box } from '@mui/material';

export const TabPanel = ({
  children,
  value,
  index,
  oneRender = true,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={oneRender && value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {(value === index || !oneRender) && <Box>{children}</Box>}
    </div>
  );
};
