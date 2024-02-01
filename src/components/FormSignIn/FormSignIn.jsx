import { useContext } from "react";
import { Link, Navigate } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';

function FormSignIn() {
    const context = useContext(ShoppingContext);

    // Sign Out
    const signOut = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(signOut);
    const isUserSignOut = context.signOut || parsedSignOut;
    // Account
    const account = localStorage.getItem('account');
    const parsedAccount = JSON.parse(account);
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true;
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

    const handleSignIn = () => {
        const stringifiedSignOut = JSON.stringify(false);
        localStorage.setItem('sign-out', stringifiedSignOut);
        context.setSignOut(false);
        // Redirect
        return <Navigate replace to={'/'} />;
    };

    const handleSignOut = () => {
        localStorage.removeItem('account');
        context.setAccount({});
        return <Navigate replace to={'/'} />;
    };

    const renderButton = () => {
        if(hasUserAnAccount && !isUserSignOut){
            return (
                <>
                    <Link to="/">
                        <button className='inline-block rounded-sm px-5 py-3 text-white bg-neutral-900 hover:opacity-80 transition duration-150 hover:ease-linear font-medium' onClick={() => handleSignOut()}>
                            Log out
                        </button>
                    </Link>
                </>
            );
        } else {
            return(
                <>
                    <Link to="/">
                        <button className='inline-block rounded-sm px-5 py-3 text-white bg-neutral-900 hover:opacity-80 transition duration-150 hover:ease-linear font-medium' onClick={() => handleSignIn()} disabled={!hasUserAnAccount}>
                            Log in
                        </button>
                    </Link>
                </>
            );
        }
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                <p className="mt-4 text-gray-500">
                    Welcome to Shopi! Sign in for an express checkout experience. Your favorite items are just a click away.
                </p>
            </div>

            <div className="mx-auto mb-0 mt-8 max-w-md space-y-6">
                <div className="flex flex-col w-80 gap-5">
                    <p className="">
                        <span className='w-full rounded-lg border-gray-200 pr-4 py-4 pe-12 text-sm font-medium shadow-sm'>Email: </span>
                        <span className="font-normal text-sm">{parsedAccount?.email}</span>
                    </p>
                    <p className="">
                        <span className='w-full rounded-lg border-gray-200 pr-4 py-4 pe-12 text-sm font-medium shadow-sm'>Password: </span>
                        <span className="font-normal text-sm">{parsedAccount?.password}</span>
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-gray-500">
                        No account?
                        <a className='ml-1 underline font-medium text-base' onClick={() => context.setViewForm('create-user-info')} disabled={hasUserAnAccount}>
                            Sign up
                        </a>
                    </p>
                    {renderButton()}
                </div>
            </div>
        </div>
    );
}

export default FormSignIn;