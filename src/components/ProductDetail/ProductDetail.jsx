import { useContext } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";

const ProductDetail = () => {
    const context = useContext(ShoppingContext);
    
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] top-[68px] flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className="bg-gray-400 bg-opacity-30 hover:bg-opacity-20 p-2 rounded-full cursor-pointer" onClick={() => context.closeProductDetail()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <figure className='px-6'>
                <img
                className='w-full h-full rounded-lg'
                src={context.productToShow.images}
                alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>${context.productToShow.title}</span>
                <span className='font-light text-sm'>${context.productToShow.description}</span>
            </p>
        </aside>
    );
}

export default ProductDetail;