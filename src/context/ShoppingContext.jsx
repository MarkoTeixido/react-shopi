import { useEffect, createContext, useState } from "react";
import { apiUrl } from "../api/api";
import PropTypes from 'prop-types';

const ShoppingContext = createContext();



const ShoppingProvider = ({children}) => {

    // Shopping Cart · Increment quantity
    const [count , setCount] = useState(0);

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([]);
    
    // Shopping Cart · Order
    const [order, setOrder] = useState([]);

    // Get products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const [loading, setLoading] = useState(true);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log('searchByTitle: ', searchByTitle);

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${apiUrl}/products`);
            const data = await response.json();
            setItems(data);
            setLoading(false);
          } catch (error) {
            console.error(`Oh no, ocurrió un error: ${error}`);
          }
        };
        fetchData();
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return (
            items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        );
    };

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }
    

    useEffect(() => {
        const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
            if (searchType === 'BY_TITLE') {
                return filteredItemsByTitle(items, searchByTitle);
            }
    
            if (searchType === 'BY_CATEGORY') {
                return filteredItemsByCategory(items, searchByCategory);
            }
    
            if (searchType === 'BY_TITLE_AND_CATEGORY') {
                return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
            }
    
            if (!searchType) {
                return items;
            }
        };

        try {
            if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory));
            if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory));
            if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory));
            if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
        } catch (error) {
            console.error(`Oh no, ocurrió un error: ${error}`);
        }
    }, [ items, searchByTitle, searchByCategory]);

    return (
        <ShoppingContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            loading,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingContext.Provider>  
    );
}

ShoppingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {ShoppingContext, ShoppingProvider};