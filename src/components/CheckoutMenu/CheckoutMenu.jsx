import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';
import OrderCard from '../OrderCard/OrderCard';
import { totalPrice } from '../../utils/utils';
import { format } from 'date-fns';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingContext);
    const date = new Date();

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);
    };

    const handleCheckout = () => {
        const orderToAdd = {
          date: format(date, 'dd.MM.yy', { awareOfUnicodeTokens: true }),
          products: context.cartProducts,
          totalProducts: context.cartProducts.length,
          totalPrice: totalPrice(context.cartProducts)
        };
    
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(context.count = 0);
        context.setSearchByTitle(null);
    };

    return (
        <aside className="md:w-[600px] flex flex-col self-center gap-3">
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
            </div> 
            <div className=' px-6'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-normal'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
            <div className='px-4 gap-3 flex flex-col'>
                <Link to='/my-orders/last' className=''>
                    <button className='w-full px-10 py-4 text-white border bg-neutral-900 hover:opacity-80 transition duration-150 hover:ease-linear text-lg font-medium' onClick={() => handleCheckout()} disabled={context.cartProducts.length === 0}>Checkout</button>
                </Link>
                <Link to='/' className=''>
                    <button className='w-full px-10 py-4 bg-white border hover:bg-neutral-900 hover:text-white transition duration-150 hover:ease-linear text-lg font-medium'>Back</button>
                </Link>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;