import { useContext, useLayoutEffect } from 'react';
import { useRoutes, BrowserRouter, useLocation, Navigate } from 'react-router-dom';
import { ShoppingContext, ShoppingProvider } from '../../context/ShoppingContext';
import initializeLocalStorage from '../../utils/localStorage';
import Home from '../Home/Home';
import MyAccount from '../MyAccount/MyAccount';
import MyOrder from '../MyOrder/MyOrder';
import MyOrders from '../MyOrders/MyOrders';
import NotFound from '../NotFound/NotFound';
import SignIn from '../SignIn/SignIn';
import Cart from '../Cart/Cart';
import Navbar from '../../components/Navbar/Navbar';
import Layout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';
import '../../index.css';


const AppRoutes = () => {
  const context = useContext(ShoppingContext);
  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);
  // Sign Out
  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = Object.keys(context.account).length === 0;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  const isUserSignOut = context.signOut || parsedSignOut;

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/fornitures', element: <Home /> },
    { path: '/shoes', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: hasUserAnAccount && !isUserSignOut ? <MyAccount /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-order', element: hasUserAnAccount && !isUserSignOut ? <MyOrder /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-orders', element: hasUserAnAccount && !isUserSignOut ? <MyOrders /> : <Navigate replace to={'/sign-in'} />},
    { path: '/my-orders/last', element: hasUserAnAccount && !isUserSignOut ? <MyOrder /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-orders/:id', element: hasUserAnAccount && !isUserSignOut ? <MyOrder /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/cart', element: <Cart /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  initializeLocalStorage();

  return (
    <ShoppingProvider>
      <BrowserRouter>
        <Layout>
          <Wrapper>
            <AppRoutes />
          </Wrapper>
        </Layout>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </ShoppingProvider>
  );
};

export default App;
