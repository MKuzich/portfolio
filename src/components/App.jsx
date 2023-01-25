import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { GlobalStyle } from './GlobalStyle';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Projects = lazy(() => import('../pages/Projects/Projects'));
const Admin = lazy(() => import('../pages/Admin/Admin'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </>
  );
};
