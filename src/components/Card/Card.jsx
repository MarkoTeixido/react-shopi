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
        <div className='absolute top-0 right-0 flex justify-center items-center text-white bg-emerald-500 w-6 h-6 rounded-full m-2 transition duration-150 hover:ease-linear'>
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
    <div className='bg-white cursor-pointer w-56 h-60 border rounded-md' onClick={() => showProduct(data.data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-t-lg' src={data.data.images[0]} alt={data.data.title} />
        {renderIcon(data.data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-normal pl-2'>{data.data.title}</span>
        <span className='text-lg font-medium pr-2'>${data.data.price}</span>
      </p>
    </div>
  );
}
  
export default Card;