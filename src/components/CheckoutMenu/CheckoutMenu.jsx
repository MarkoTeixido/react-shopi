import { useContext } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext';
import OrderCard from '../OrderCard/OrderCard';
import { totalPrice } from '../../utils/utils';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);
    }

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
            <div className='px-4 flex justify-center gap-3'>
                <button className='flex-grow px-10 py-4 bg-white border hover:bg-neutral-900 hover:text-white transition duration-150 hover:ease-linear text-lg font-medium'>Seguir Comprando</button>
                <button className='flex-grow px-10 py-4 text-white border bg-neutral-900 hover:opacity-80 transition duration-150 hover:ease-linear text-lg font-medium'>Finalizar Compra</button>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;