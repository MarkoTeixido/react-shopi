import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const ShoppingContext = createContext();

const ShoppingProvider = ({children}) => {
    ShoppingProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    // Shopping Cart · Increment quantity
    const [count , setCount] = useState(0);

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </ShoppingContext.Provider>  
    );
}

export {ShoppingContext, ShoppingProvider};