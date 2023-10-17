import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [Products, setProducts] = useState();

  return (
    <Context.Provider
      value={{ categories, setCategories, Products, setProducts }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
