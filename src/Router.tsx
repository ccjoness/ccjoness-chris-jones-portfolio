import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/Main.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
