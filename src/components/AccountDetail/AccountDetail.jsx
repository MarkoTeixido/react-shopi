import { useContext, useState, useRef } from "react";
import { ShoppingContext } from '../../context/ShoppingContext';

function AccountDetail() {
    const context = useContext(ShoppingContext);
    const [view, setView] = useState('user-info');
    const account = localStorage.getItem('account');
    const parsedAccount = JSON.parse(account);
    const form = useRef(null);

    const editAccount = () => {
        const formData = new FormData(form.current)
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            }

        // Update account
        const stringifiedAccount = JSON.stringify(data);
        localStorage.setItem('account', stringifiedAccount);
        context.setAccount(data);
    };

    const renderUserInfo = () => {
        return (
            <div className='flex flex-col w-80 gap-4 my-4'>
                <h2 className="font-medium text-center pb-1">My Account Information</h2>
                <p className="py-2">
                    <span className='w-full rounded-lg border-gray-200 pr-4 py-4 pe-12 text-sm font-medium shadow-sm'>Name: </span>
                    <span>{parsedAccount?.name}</span>
                </p>
                <p className="py-1">
                    <span className='w-full rounded-lg border-gray-200 pr-4 py-4 pe-12 text-sm font-medium shadow-sm'>Email: </span>
                    <span>{parsedAccount?.email}</span>
                </p>
                <button className='w-full px-10 py-4 text-white border bg-neutral-900 hover:opacity-80 transition duration-150 hover:ease-linear text-lg font-medium' onClick={() => setView('edit-user-info')}>
                    Edit
                </button>
            </div>
        );
    };

    const renderEditUserInfo = () => {
        return (
            <form ref={form} className='flex flex-col gap-4 w-80'>
                <h2 className="font-medium text-center pb-1">Edit Your Information</h2>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name" className='font-light text-sm'>Your name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={parsedAccount.name}
                        placeholder="Peter"
                        className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='font-light text-sm'>Your email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        defaultValue={parsedAccount.email}
                        placeholder="hi@helloworld.com"
                        className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='font-light text-sm'>Your password:</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        defaultValue={parsedAccount.password}
                        placeholder="******"
                        className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                    />
                </div>
                <button className='w-full px-10 py-4 text-white border bg-neutral-900 hover:opacity-80 transition duration-150 hover:ease-linear text-lg font-medium' onClick={() => {setView('user-info'), editAccount()}}>
                    Confirm
                </button>
            </form>
        );
    };

    const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo();
    
    return (
        <main className="py-5">
            {renderView()}
        </main>
    );
}

export default AccountDetail;