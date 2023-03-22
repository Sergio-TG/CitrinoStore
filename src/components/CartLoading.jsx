import React from "react";
import { BsFillCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../index.css";


const CartLoading = () => {
  return (
    <div className='bloqueNoItems'>
        <h3>
        <BsFillCartXFill />
        </h3>
        <p>No hay productos en su carrito</p>
        <Link to={"/"}>
          <button className="buttonHome bg-warning">Ir a Inicio</button>
        </Link>
    </div>
  );
};

export default CartLoading;