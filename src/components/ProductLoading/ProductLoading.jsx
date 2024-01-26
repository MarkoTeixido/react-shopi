function ProductLoading() {
    return(       
        <div className=' max-sm:w-36 sm:w-[250px] group block border rounded-md bg-white animate-pulse'>
            <figure className='relative w-full'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'></span>
                <div className='h-[300px] w-full bg-gray-300'></div>
            </figure>
            <div className='m-3 flex justify-between text-sm'>
                <p className='w-3/4 bg-gray-300 h-4'></p>
                <span className='w-1/4 bg-gray-300 h-4'></span>
            </div>
        </div>      
    );
}

export default ProductLoading;