import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { GlobalStyle } from './GlobalStyle';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Projects = lazy(() => import('../pages/Projects/Projects'));
const Admin = lazy(() => import('../pages/Admin/Admin'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};
