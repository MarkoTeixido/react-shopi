import { useContext } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext';
import OrderCard from '../OrderCard/OrderCard';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingContext);

    return (
        <aside className="md:w-[600px] flex flex-col self-center">
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
            </div> 

            <div className=' px-6'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;