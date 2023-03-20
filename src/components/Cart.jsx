import React, { useState } from "react";
import "../index.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import SendOrder from "./SendOrder";
import { BsFillTrash3Fill } from "react-icons/bs";

const Cart = () => {
    const { cart, removeItem, removeAll, calcularTotalCompra } =
        useContext(CartContext);

    function formatNumber(number) {
        return new Intl.NumberFormat().format(number);
    }

    return !cart.length ? (
        <NoItemsLoad />
    ) : (
        <>
            <div className="bloqButtonClear">
                <button className="btn btn-danger btnClear" onClick={removeAll}>
                    Vaciar carrito
                </button>
            </div>
            <div className="bloqWidget">
                {cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className="card cardWidget">
                                <img
                                    src={`../src/assets/img_producto/${item.imagen}.jpg`}
                                    className="card-img-top imgWidget"
                                    alt="..."
                                />
                                <div className="card-body text-widget">
                                    <h5 className="card-title fw-bold">{item.nombre}</h5>
                                    <p className="card-text fw-bolder">
                                        Precio:
                                        <span className="spanInfo">
                                            {" "}
                                            ${formatNumber(item.precio)}
                                        </span>
                                    </p>
                                    <p className="card-text fw-bolder">
                                        Cantidad seleccionada:
                                        <span className="spanInfo"> {item.cantidad}</span>
                                    </p>
                                    <p className="card-text fw-bolder">
                                        Total:
                                        <span className="spanInfo">
                                            {" "}
                                            ${formatNumber(item.precio * item.cantidad)}{" "}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <button
                                        className="buttonEliminar"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        <BsFillTrash3Fill />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="bloqButtonClear">
                <p className="precioTotal">
                    Precio total de Compra:{" "}
                    <span className="spanInfo">
                        ${formatNumber(calcularTotalCompra())}
                    </span>
                </p>
            </div>
            {<SendOrder />}
        </>
    );
};

export default Cart;