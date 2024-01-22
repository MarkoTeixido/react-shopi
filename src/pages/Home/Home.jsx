import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { apiUrl } from "../../api/api";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div className="flex flex-col gap-4">
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mb-8'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </div>
  );
}
  
export default Home;