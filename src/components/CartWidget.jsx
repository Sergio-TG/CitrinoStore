import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CounterContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CounterContext);

  const cantidad = cart.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);

  return (
    <div className="bloqueBoton">
      <Link to={"/cart"}>
        <button type="button" className="btn btn-success btn-lg buttonCompra">
          🛒{cantidad}
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;