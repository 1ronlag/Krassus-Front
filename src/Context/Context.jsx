import { createContext, useState, useEffect } from "react";
// import axios from "axios";

//  context creation
const SucuContext = createContext();

// Data Provider
const SucuProvider = ({ children }) => {
  const [suculentas, setSucu] = useState([]);
  const [carrito, setCarrito] = useState([]);

  
useEffect(() => {
  const getSucu = async () => {
    try {
      const res = await fetch("http://localhost:8080/inventory/");
      const suculentas = await res.json();
      if (suculentas) {
        setSucu(suculentas);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      // console.log("error en la solicitud", error)
      alert("No se puede mostrar la informacion solicitada");
    }
  };
  getSucu();
}, []);
    



  //Buy Cart//
  const addToCart = ({ id, price, name, imagen }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, imagen, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  console.log(carrito);
  return (
    <SucuContext.Provider
      value={{
        suculentas,
        carrito,
        setCarrito,
        addToCart,
        increment,
        decrement,
      }}
    >
      {children}
    </SucuContext.Provider>
  );
};

// Export Provider
export { SucuProvider };

// Export Context
export default SucuContext;
