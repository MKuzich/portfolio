import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  AppBar,
  useScrollTrigger,
  Box,
  Fab,
  Fade,
  Toolbar,
  Tabs,
  Tab,
  CircularProgress,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollTop({ children }) {
  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const SharedLayout = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <header>
        <Container>
          <AppBar>
            <Toolbar>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
              >
                <Tab to="/" label="About me" component={Link} />
                <Tab to="/projects" label="My projects" component={Link} />
              </Tabs>
            </Toolbar>
          </AppBar>
        </Container>
      </header>
      <main style={{ marginTop: '100px' }}>
        <Suspense
          fallback={
            <Container>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: 500,
                }}
              >
                <CircularProgress size={60} />
              </Box>
            </Container>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default SharedLayout;
