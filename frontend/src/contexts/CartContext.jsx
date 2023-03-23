import { createContext, useState } from "react";
import { Cart } from "../components/global/Cart";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);

  return (
    <CartContext.Provider value={{ setShow, products, setProducts }}>
      {children}
      <Cart {...{ show, setShow, products, setProducts }} />
    </CartContext.Provider>
  );
};
