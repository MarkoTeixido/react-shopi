import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';

function Footer() {
    const context = useContext(ShoppingContext);

    return(
        <footer className="bg-neutral-950">
            <div className="relative mx-auto mt-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a className="inline-block rounded-full text-white bg-gray-700 hover:bg-gray-600 shadow transition max-sm:p-2 sm:p-3 lg:p-4" href="#top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"/>
                        </svg>
                    </a>
                </div>

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center lg:justify-start">
                            <NavLink to='/' onClick={() => context.setSearchByCategory()} className="text-white font-semibold text-xl">
                                Shopi
                            </NavLink>
                        </div>

                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white opacity-80 lg:text-left" >
                            Welcome to Shopi - your online shopping destination where quality meets convenience!
                        </p>
                    </div>

                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                        <li>
                            <NavLink to='/clothes' onClick={() => context.setSearchByCategory('clothes')} className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                                Clothes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/electronics' onClick={() => context.setSearchByCategory('electronics')} className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                                Electronics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/fornitures' onClick={() => context.setSearchByCategory('fornitures')} className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                                Fornitures
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/others' onClick={() => context.setSearchByCategory('others')} className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                                Others
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <p className="mt-12 text-center text-sm text-white opacity-80 lg:text-right">
                    Copyright &copy; 2024. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;