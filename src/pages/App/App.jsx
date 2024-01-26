import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingProvider } from '../../context/ShoppingContext';
import Home from '../Home/Home';
import MyAccount from '../MyAccount/MyAccount';
import MyOrder from '../MyOrder/MyOrder';
import MyOrders from '../MyOrders/MyOrders';
import NotFound from '../NotFound/NotFound';
import SignIn from '../SignIn/SignIn';
import Cart from '../Cart/Cart';
import Navbar from '../../components/Navbar/Navbar';
import Layout from '../../components/Layout/Layout';
import '../../index.css';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/fornitures', element: <Home /> },
    { path: '/shoes', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/cart', element: <Cart /> },
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
