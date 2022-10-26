import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  //If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }
  //return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find the cart item to remove
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  //check if quantity is equal 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  //return back cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) => (cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export function AppWrapper({ children }) {
  const [medlemName, setMedlemName] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const sharedState = {
    medlemName,
    setMedlemName,
    cartCount,
    cartTotal,
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
  };

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}
export function useAppContext() {
  return useContext(AppContext);
}
