import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ShoppingContext } from '../../context/ShoppingContext';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    const context = useContext(ShoppingContext);

    const [scrolling, setScrolling] = useState(false);
    const activeStyle = "underline underline-offset-4";
    const navbarStyles = scrolling ? 'bg-neutral-900 text-neutral-200' : '';
    const linkStyles = scrolling ? 'hover:text-neutral-50' : 'hover:text-neutral-700';
    const isMobile = useMediaQuery({ maxWidth: 820 });

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            {isMobile ? (
                <MobileNavbar />
            ) : (
                <nav className={`flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light ${navbarStyles}`}>
                    <ul className='flex items-center gap-3'>
                        <li className='font-semibold text-lg'>
                            <NavLink to='/' onClick={() => context.setSearchByCategory()}>
                                Shopi
                            </NavLink>
                        </li>
                        <li className={linkStyles}>
                            <NavLink to='/' onClick={() => context.setSearchByCategory()} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                All
                            </NavLink>
                        </li>
                        <li className={linkStyles}> 
                            <NavLink to='/clothes' onClick={() => context.setSearchByCategory('clothes')} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                Clothes
                            </NavLink>
                        </li>
                        <li className={linkStyles}>
                            <NavLink to='/electronics' onClick={() => context.setSearchByCategory('electronics')} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                Electronics
                            </NavLink>
                        </li>
                        <li className={linkStyles}>
                            <NavLink to='/fornitures' onClick={() => context.setSearchByCategory('fornitures')} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                Fornitures
                            </NavLink>
                        </li>
                        <li className={linkStyles}>
                            <NavLink to='/toys' onClick={() => context.setSearchByCategory('toys')} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                Toys
                            </NavLink>
                        </li>
                        <li className={linkStyles}>
                            <NavLink to='/others' onClick={() => context.setSearchByCategory('others')} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                Others
                            </NavLink>
                        </li>
                    </ul>

                    <ul className='flex items-center gap-3'>
                        <li className='text-black/60'>
                            Mark@dev.com
                        </li>
                        <li className={linkStyles}>
                            <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
                                My Orders
                            </NavLink>
                        </li>
                        <li className={linkStyles}>
                            <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
                                My Account
                            </NavLink>
                        </li>
                        <li className={linkStyles}>
                            <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
                                Sign In
                            </NavLink>
                        </li>
                        <li className='cursor-pointer flex gap-1 justify-center items-center'>
                            <NavLink to='/cart' className='flex gap-1 justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg><span className='font-medium'>{context.count}</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </>  
    );
}

export default Navbar;