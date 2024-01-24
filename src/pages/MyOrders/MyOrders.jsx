import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';
import OrdersCard from '../../components/OrdersCard/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingContext);

  return (
    <section className='flex flex-col items-center justify-center gap-3 relative w-80'>
      <h1>My Orders</h1>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              date= {order.date} 
            />
          </Link>
        )) 
      }
    </section>
  );
}

export default MyOrders;