import { useContext } from 'react';
import { ShoppingContext } from '../../context/ShoppingContext';
import OrderCard from '../../components/OrderCard/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingContext);

  return (
    <div className='flex flex-col w-80'>
      MyOrder
      {
        context.order && context.order.length > 0 ? context.order.slice(-1)[0].products.map(product => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title ={product.title}
                    imageUrl = {product.images}
                    price= {product.price}
                    
                    />
                    
              ))
              : <p>No hay productos en la orden.</p>
            }
    </div>
  );
}

export default MyOrder;