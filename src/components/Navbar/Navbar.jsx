import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const activeStyle = "underline underline-offset-4";
    const navbarStyles = scrolling ? 'bg-neutral-900 text-neutral-200' : '';
    const linkStyles = scrolling ? 'hover:text-neutral-50' : 'hover:text-neutral-700';

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
        <nav className={`flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light ${navbarStyles}`}>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li className={linkStyles}>
                    <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li className={linkStyles}> 
                    <NavLink to='/clothes' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li className={linkStyles}>
                    <NavLink to='/electronics' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li className={linkStyles}>
                    <NavLink to='/fornitures' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Fornitures
                    </NavLink>
                </li>
                <li className={linkStyles}>
                    <NavLink to='/toys' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Toys
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
                <li className='cursor-pointer'>
                    🛒 0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;