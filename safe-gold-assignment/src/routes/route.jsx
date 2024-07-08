import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import { ProductDetails } from '../pages/ProductDetails';
import { ProductList } from '../pages/ProductList';
import { PublicLayout } from '../components/Layouts/PublicLayout';
import { PrivateLayout } from '../components/Layouts/PrivateLayout';
const route = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicLayout>
        <ProductList />
      </PublicLayout>
    ),
  },
  {
    path: '/product-list',
    element: (
      <PublicLayout>
        <ProductList />
      </PublicLayout>
    ),
  },
  {
    path: '/product-details',
    element: (
      <PrivateLayout>
        <ProductDetails />
      </PrivateLayout>
    ),
  },
  {
    path: '/login',
    element: (
      <PublicLayout>
        <Login />
      </PublicLayout>
    ),
  },
]);

export default route;
