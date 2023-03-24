import React from "react";
import { BsFillCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../index.css";


const CartLoading = () => {
  return (
    <div className='bloqueNoItems'>
        <h1>
        <BsFillCartXFill />
        </h1>
        <p className="text_cart">El carrito está vacío</p>
        <Link to={"/"}>
          <button className="buttonHome bg-grey">Ir a Inicio</button>
        </Link>
    </div>
  );
};

export default CartLoading;