import { useContext } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";

const Card = (data) => {
  const context = useContext(ShoppingContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
    console.log('CART: ', context.cartProducts);
  };

  const renderIcon = (id) => {
    const isInCart = (context.cartProducts.filter(product => product.id === id).length > 0);

    if (isInCart) {
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center text-white bg-emerald-500 w-6 h-6 rounded-full m-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
      );
    } else {
      return (
        <div onClick={(event) => addProductsToCart(event, data.data)} className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 transition duration-150 hover:bg-opacity-80 hover:ease-linear hover:rotate-90'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      );
    }
  };

  return (
    <div className='group block border rounded-md' onClick={() => showProduct(data.data)}>
      <figure className='relative w-full'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
        <img className='h-[300px] w-full object-cover sm:h-[350px]' src={data.data.images[0]} alt={data.data.title} />
        {renderIcon(data.data.id)}
      </figure>
      <div className="m-3 flex justify-between text-sm">
        <p className=''>
          <span className='text-gray-900 group-hover:underline group-hover:underline-offset-4'>{data.data.title}</span>  
        </p>
        <span className='text-gray-900 font-medium text-lg'>${data.data.price}</span>
      </div>
    </div>
  );
}
  
export default Card;