import { useContext } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";
import Card from "../../components/Card/Card";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import CheckoutSideMenu from "../../components/CheckoutSideMenu/CheckoutSideMenu";

function Home() {
  const context = useContext(ShoppingContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      );
    } else {
      return (
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-center font-medium text-lg">Sorry, No Matches Found.</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-56 h-56 text-neutral-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
          </svg>
        </div>
      );
    }
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-3 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className={`gap-4 w-full max-w-screen-lg ${context.filteredItems?.length === 0 ? '' : 'grid grid-cols-4'}`}>
        {renderView()}
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </div>
  );
}
  
export default Home;