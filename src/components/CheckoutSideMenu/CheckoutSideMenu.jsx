import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { ShoppingContext } from '../../context/ShoppingContext';
import OrderCard from '../OrderCard/OrderCard';
import { totalPrice } from '../../utils/utils';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingContext)
    
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);
    };

    useEffect(() => {
        if (context.isCheckoutSideMenuOpen) {
            document.body.classList.add('no-scrolling');
        } else {
            document.body.classList.remove('no-scrolling');
        }

        return () => {
            document.body.classList.remove('no-scrolling');
        };
    }, [context.isCheckoutSideMenuOpen]);

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} max-sm:w-full max-sm:h-screen max-sm:border-none w-[400px] h-[calc(100vh-68px)] top-[68px] flex-col fixed right-0 border border-black rounded-lg bg-white overflow-y-scroll`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()} className='bg-gray-400 bg-opacity-30 hover:bg-opacity-20 p-2 rounded-full cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div> 

            <div className='px-6 flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 min-h-screen mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-normal'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/cart'>
                    <button className='bg-neutral-900 py-3 text-white w-full max-sm:h-14 hover:opacity-80 transition duration-150 hover:ease-linear' onClick={() => context.closeCheckoutSideMenu()}>View my cart</button>
                </Link>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;