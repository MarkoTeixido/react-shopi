import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingProvider } from '../../context/ShoppingContext';
import Home from '../Home/Home';
import MyAccount from '../MyAccount/MyAccount';
import MyOrder from '../MyOrder/MyOrder';
import MyOrders from '../MyOrders/MyOrders';
import NotFound from '../NotFound/NotFound';
import SignIn from '../SignIn/SignIn';
import Navbar from '../../components/Navbar/Navbar'
import Layout from '../../components/Layout/Layout';
import '../../index.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
}

const App = () => {
  return (
    <ShoppingProvider>
      <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
      <Navbar />
      </BrowserRouter>
    </ShoppingProvider>
  );
};

export default App;
