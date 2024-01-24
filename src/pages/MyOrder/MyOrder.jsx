import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';
import OrderCard from '../../components/OrderCard/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  
  if (index === 'last') index = (context.order?.length - 1);

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          )
          )
        }
        <p className='flex justify-between items-center'>
          <span className='font-medium text-xl'>Total:</span>
          <span className='font-medium text-2xl'>{context.order?.[index]?.totalPrice}</span>
        </p>
      </div>
    </div>
  );
}

export default MyOrder;