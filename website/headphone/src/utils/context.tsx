import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState({ data: [] });
  const [products, setProducts] = useState({ data: [] });

  const [cartItem, setCartItem] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [cartItemCount, setcartItemCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItem));

    let count = 0;
    cartItem.map((item) => (count += item.attributes.quantity));
    setcartItemCount(count);

    let subTotal = 0;
    cartItem.map(
      (item) => (subTotal += item.attributes.Price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItem]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItem];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItem(items);
  };
  const handleRemoveFromCart = (product) => {
    let items = [...cartItem];
    items = items.filter((p) => p.id !== product.id);
    setCartItem(items);
  };
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItem];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      if (items[index].attributes.quantity === 10) {
        items[index].attributes.quantity === 10;
      } else {
        items[index].attributes.quantity += 1;
      }
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) {
        items[index].attributes.quantity === 1;
      } else {
        items[index].attributes.quantity -= 1;
      }
    }
    setCartItem(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItem,
        setCartItem,
        cartItemCount,
        setcartItemCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
