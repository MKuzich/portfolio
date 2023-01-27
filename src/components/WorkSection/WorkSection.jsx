import {
  Box,
  Stack,
  Typography,
  Tabs,
  Tab,
  Tooltip,
  useMediaQuery,
} from '@mui/material';

import { work } from 'data/work';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RxTriangleRight } from 'react-icons/rx';

import { useTabPanel } from 'hooks/useTabPanel';
import { TabPanel } from 'components/TabPanel/TabPanel';

export const WorkSection = () => {
  const { value, handleChange, a11yProps } = useTabPanel();
  const isMd = useMediaQuery('(min-width:900px)');

  return (
    <Stack ml={{ md: '20%' }} direction="column" gap={{ xxs: 2, md: 4, lg: 6 }}>
      <Stack direction="row" alignItems="center" gap={{ xxs: 1, lg: 2 }}>
        <Stack flexShrink={0} direction="row" alignItems="end" gap={1}>
          <Typography
            fontSize={{
              xxs: '20px',
              xs: '22px',
              md: '24px',
              lg: '26px',
            }}
            variant="number"
          >
            04.
          </Typography>
          <Typography
            flexShrink={0}
            fontSize={{
              xxs: '14px',
              xs: '16px',
              md: '18px',
              lg: '20px',
            }}
            variant="title1"
          >
            Work experience
          </Typography>
        </Stack>
        <Box
          sx={{
            mt: 2,
            mb: 1,
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, #484848, transparent 90%)',
          }}
        />
      </Stack>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: { xxs: 'column', md: 'row' },
          height: 300,
        }}
      >
        <Tabs
          orientation={isMd ? 'vertical' : 'horizontal'}
          textColor="secondary"
          variant={isMd ? 'standard' : 'scrollable'}
          scrollButtons="auto"
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          sx={{
            color: 'primary.light',
            borderRight: { ssx: 0, md: 1 },
            borderColor: 'primary.light',
            width: { ssx: '100%', md: 180 },
            flexShrink: 0,
          }}
        >
          {work.map(({ position }, idx) => (
            <Tab
              key={'tabmenu' + idx}
              label={position}
              sx={{
                color: '#fff',
              }}
              {...a11yProps(idx)}
            />
          ))}
        </Tabs>
        <Box width="100%" mt={{ xxs: 6, md: 0 }}>
          {work.map(
            (
              { position, company, from, to, location, responsibilities },
              idx
            ) => (
              <TabPanel
                // sx={{
                //   flexGrow: 1,
                //   width: '100%',
                //   '& .MuiBox-root': {
                //     padding: '0px',
                //     backgroundColor: 'red',
                //   },
                // }}
                key={'tabpanel' + idx}
                value={value}
                index={idx}
              >
                <Box
                  position="relative"
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                  alignItems="start"
                  border={1}
                  borderColor="custom.light"
                  borderRadius={3}
                  pt={5}
                  px={3}
                  pb={3}
                >
                  <Stack width="100%">
                    <Tooltip
                      title={
                        <Stack direction="row" gap={0.5} alignItems="center">
                          <HiOutlineLocationMarker size="1.5rem" />
                          <Typography>{location}</Typography>
                        </Stack>
                      }
                      placement="top"
                    >
                      <Typography
                        position="absolute"
                        top="-1rem"
                        right="1.5rem"
                        variant="h2"
                      >
                        {company}
                      </Typography>
                    </Tooltip>
                    <Typography variant="h3">{position}</Typography>
                    <Box
                      sx={{
                        mb: 1,
                        width: '100%',
                        height: '1px',
                        background:
                          'linear-gradient(to right, rgba(66, 66, 66, 0.5), transparent 90%)',
                      }}
                    />
                    <Stack gap={2}>
                      <Typography fontWeight={700}>
                        {from}
                        {' - '}
                        {to}
                      </Typography>
                      <ul>
                        {responsibilities.map(res => (
                          <li
                            style={{
                              display: 'flex',
                              alignItems: 'baseline',
                              gap: 12,
                            }}
                            key={company + res}
                          >
                            <RxTriangleRight
                              color="#8bc34a"
                              style={{ flexShrink: 0 }}
                            />
                            <Typography fontWeight={400}>{res}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Stack>
                  </Stack>
                </Box>
              </TabPanel>
            )
          )}
        </Box>
      </Box>
    </Stack>
  );
};
