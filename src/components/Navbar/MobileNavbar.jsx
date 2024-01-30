import { useEffect, useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ShoppingContext } from '../../context/ShoppingContext';

function MobileNavbar({ navbarStyles }) {
    const context = useContext(ShoppingContext);
    const location = useLocation();
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderIcon = () => {
        if (!menuVisible) {
            return (
                <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
            );
        } else {
            return (
                <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            );
        }
    };

    useEffect(() => {
        setMenuVisible(false);
    }, [location]);

    return (
        <nav className={` flex justify-between items-center fixed z-10 top-0 w-full py-5 px-4 text-sm font-light ${navbarStyles}`}>
            <div>
                <NavLink to='/' className='font-semibold text-lg'>
                    Shopi
                </NavLink>
            </div>
            <div className='flex gap-3'>
                <div>
                    {renderIcon()}
                </div>
                <div className='cursor-pointer flex gap-1 justify-center items-center'>
                    <NavLink to='/cart' className='flex gap-1 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg><span className='font-medium'>{context.count}</span>
                    </NavLink>
                </div>
            </div>
            <ul className={`bg-white w-full h-screen flex flex-col absolute top-full left-0 items-center pt-5 gap-3 ${menuVisible ? '' : 'hidden'}`}>
                <li className='ml-2'>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between self-center rounded-lg px-4 py-2 text-neutral-900 hover:bg-gray-100 hover:text-neutral-700">
                            <span className="text-sm font-medium">Products</span>
                            <span className="flex justify-center shrink-0 transition duration-300 group-open:-rotate-180 text-neutral-900 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" strokeWidth={1} stroke="currentColor" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                                </svg>
                            </span>
                        </summary>
                        <ul className='mt-2 space-y-1 px-4 bg-white flex flex-col items-center gap-3 '>
                            <li className='rounded-lg px-4 py-2 text-neutral-900 hover:bg-gray-400 hover:text-neutral-700'>
                                <NavLink to='/clothes' onClick={() => context.setSearchByCategory('clothes')}>
                                    Clothes
                                </NavLink>
                            </li>
                            <li className='rounded-lg px-4 py-2 text-neutral-900 hover:bg-gray-400 hover:text-neutral-700'>
                                <NavLink to='/shoes' onClick={() => context.setSearchByCategory('shoes')}>
                                    Shoes
                                </NavLink>
                            </li>
                            <li className='rounded-lg px-4 py-2 text-neutral-900 hover:bg-gray-400 hover:text-neutral-700'>
                                <NavLink to='/electronics' onClick={() => context.setSearchByCategory('electronics')}>
                                    Electronics
                                </NavLink>
                            </li>
                            <li className='rounded-lg px-4 py-2 text-neutral-900 hover:bg-gray-100 hover:text-neutral-700'>
                                <NavLink to='/Fornitures' onClick={() => context.setSearchByCategory('fornitures')}>
                                    Fornitures
                                </NavLink>
                            </li>
                            <li className='rounded-lg px-4 py-2 text-neutral-900 hover:bg-gray-100 hover:text-neutral-700'>
                                <NavLink to='/Others' onClick={() => context.setSearchByCategory('others')}>
                                    Others
                                </NavLink>
                            </li>
                        </ul>
                    </details>
                </li>
                <li className='rounded-lg px-4 py-2 text-neutral-900 hover:bg-gray-100 hover:text-neutral-700'>
                    <NavLink to='/my-orders' className='text-sm font-medium'>
                        My Orders
                    </NavLink>
                </li>
                <li className='rounded-lg px-4 py-2 text-neutral-900 hover:bg-gray-100 hover:text-neutral-700'>
                    <NavLink to='/my-account' className='text-sm font-medium'>
                        My Account
                    </NavLink>
                </li>
                <li className='rounded-lg px-4 py-2 text-neutral-900 hover:bg-gray-100 hover:text-neutral-700'>
                    <NavLink to='/sign-in' className='text-sm font-medium'>
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

MobileNavbar.propTypes = {   
    navbarStyles: PropTypes.string.isRequired,
};

export default MobileNavbar;