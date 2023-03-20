import { createContext, useState, } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext([])

export const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([])

  const navigate = useNavigate()

  const isInCart = (id) => cartList.find(item => item.id === id)

  const addTocart = (cristales, cantidad) => {
    if (isInCart(cristales.id)) {
      const newItemCantidad = cartList.map(item => {
        if (item.id === cristales.id) {
          const newCantidad = item.cantidad + cantidad
          return { ...item, cantidad: newCantidad }
        } else {
          return item
        }
      })
      setCartList(newItemCantidad)
    } else {
      const newItemCart = { ...cristales, cantidad: cantidad }
      setCartList([...cartList, newItemCart])
    }
  }

  const removeItem = (id) => setCartList(cartList.filter(item => item.id !== id)) 
 

  const cleanCart = () => {
    setCartList([])
    navigate('/')
  }

  const totalCantidad = () => {
    return cartList.reduce((acc, item) => acc += item.cantidad, 0)
  }
  const fullPayment = () => {
    return cartList.reduce((acc, item) => acc += (item.precio * item.cantidad), 0)
  }


  return (
    <CartContext.Provider value={{
      cartList,
      setCartList,
      addTocart,
      removeItem,
      cleanCart,
      totalCantidad,
      fullPayment
    }}>
      {children}
    </CartContext.Provider>
  )
}