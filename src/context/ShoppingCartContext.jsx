import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    const [count , setCount] = useState(0);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
        }}>
            {children}
        </ShoppingCartContext.Provider>  
    );
}

export {ShoppingCartContext, ShoppingCartProvider};