import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';
import OrdersCard from '../../components/OrdersCard/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingContext);

  return (
    <section className='flex flex-col items-center justify-center gap-3 relative w-80'>
      <h1>My Orders</h1>
      <div className='min-h-[330px]'>
      {
          context.order.length > 0 ? (
            context.order.map((order, index) => (
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard
                  totalPrice={order.totalPrice}
                  totalProducts={order.totalProducts}
                  date={order.date} 
                />
              </Link>
            ))
          ) : (
            <div className='flex flex-col justify-center items-center mt-10'>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="h-52 w-52" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" xmlSpace="preserve">
                <path fill="#000000" d="M216.2,171.2H78.3L60,35.1c-0.6-4.1-3.8-7.2-7.5-7.2c-0.4-0.1-0.8-0.1-1.3-0.1h-33c-4.6,0-8.3,3.3-8.3,7.4c0,4.1,3.7,7.4,8.3,7.4H46l18.3,136.2c0.6,4.3,4.1,7.5,8,7.2c0.2,0,0.4,0,0.6,0h143.3c4.6,0,8.3-3.3,8.3-7.4C224.4,174.5,220.7,171.2,216.2,171.2z"/>
                <path fill="#000000" d="M192.3,195.3c-9.1,0-16.5,7.4-16.5,16.5c0,9.1,7.4,16.5,16.5,16.5c9.1,0,16.5-7.4,16.5-16.5C208.8,202.7,201.4,195.3,192.3,195.3z"/>
                <path fill="#000000" d="M102.8,195.3c-9.1,0-16.5,7.4-16.5,16.5c0,9.1,7.4,16.5,16.5,16.5c9.1,0,16.5-7.4,16.5-16.5C119.4,202.7,112,195.3,102.8,195.3z"/>
                <path fill="#000000" d="M232,41.7L89.8,40.2c-9-1.6-15.4,4.5-14.1,13.6l12.7,91c1.3,9.1,9.8,16.5,18.9,16.5h113c9.2,0,17.8-7.4,19.2-16.4l6.4-83.7C247.2,52,241,43.3,232,41.7z M143.1,77.8c4.2,0,7.6,3.4,7.6,7.7c0,4.2-3.4,7.7-7.6,7.7c-4.2,0-7.6-3.4-7.6-7.7C135.5,81.2,138.9,77.8,143.1,77.8z M184.9,129.5c-0.7,0.4-1.5,0.6-2.3,0.6c-1.5,0-3-0.8-3.9-2.2c-3.6-6.1-10.2-9.9-17.2-9.9c-7.1,0-13.5,3.6-17.2,9.7c-1.3,2.1-4,2.8-6.2,1.5s-2.8-4.1-1.5-6.2c5.3-8.8,14.6-14.1,24.9-14.1c10.2,0,19.7,5.5,25,14.3C187.7,125.5,187,128.3,184.9,129.5z M180,93.1c-4.2,0-7.6-3.4-7.6-7.7s3.4-7.7,7.6-7.7c4.2,0,7.6,3.4,7.6,7.7C187.6,89.7,184.2,93.1,180,93.1z"/>
              </svg>
              <p className='text-medium pl-4 text-xl text-center'>No orders placed yet.</p>
            </div>
            
          )
        }
      </div>
      
    </section>
  );
}

export default MyOrders;