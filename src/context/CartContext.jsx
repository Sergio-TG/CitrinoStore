import React from "react";
import { createContext, useState, } from "react";
import Swal from "sweetalert2";

export const CounterContext = createContext(null);

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    const calcularTotalCompra = () => {
        let total = 0;
        cart.forEach((e) => total += (e.cantidad * e.precio))
        return total;
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Producto eliminado',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const removeAll = () => {
        setCart([]);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Los productos han sido eliminados',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const removeForm = () => {
        setCart([]);
    }

    return (
        <CounterContext.Provider value={{ cart, setCart, removeItem, removeAll, calcularTotalCompra, removeForm }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CartContext;