import { Container, Grid } from '@mui/material';

const Projects = () => {
  return (
    <section>
      <Container>
        {/* <div>filter</div>
        <h1>My projects</h1> */}
        <Grid container spacing={4}></Grid>
      </Container>
    </section>
  );
};
export default Projects;

// <Button
//   key={'btn' + speciality}
//   onClick={() => handleOpen(image, speciality)}
//   sx={{
//     flexShrink: 0,
//     position: 'absolute',
//     right: 0,
//     top: 0,
//     zIndex: 2,
//   }}
// >
//   <Box
//     src={image}
//     alt={speciality}
//     component="img"
//     sx={{
//       height: '300px',
//       filter: 'grayscale(1)',
//       '&': { transition: 'filter 500ms' },
//       '&:hover': {
//         filter: 'grayscale(0)',
//       },
//     }}
//   />
// </Button>;
