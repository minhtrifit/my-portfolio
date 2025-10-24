import { createBrowserRouter } from 'react-router-dom';
import { HOME_ROUTE } from './route.constant';

import Layout from '@/components/global/layout/Layout';

import { HomePage } from '@/pages/home/HomePage';
import { NotFoundPage } from '@/pages/not-found-page/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: '/*', element: <NotFoundPage /> },
]);
