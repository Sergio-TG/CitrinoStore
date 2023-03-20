import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import { useContext } from "react";

const CartWidget = () => {
    const [cart, setCart] = useContext(CartContext);

    const cantidad = cart.reduce((acc, curr) => {
        return acc + curr.cantidad;
    }, 0);

    return (
        <div className="btn-Carrito">
            <Link to={"/cart"}>
                <button type="button" className="btn btn-warning btn-lg buttonShop">
                    🛒{cantidad}
                </button>
            </Link>
        </div >
    );
};

export default CartWidget;