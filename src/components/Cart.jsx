import React, { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CartContext";
import SendOrder from "./SendOrder";
import { BsFillTrashFill } from "react-icons/bs";
import CartLoading from "./CartLoading";
import "../index.css";

const Cart = () => {
    const { cart, removeItem, removeAll, calcularTotalCompra } =
        useContext(CounterContext);

    function formatNumber(number) {
        return new Intl.NumberFormat().format(number);
    }

    return !cart.length ? (
        <CartLoading />
    ) : (
        <>
            <div className="bloqButtonClear">
                <button className="btn btn-danger btnClear" onClick={removeAll}>
                    Vaciar Carrito
                </button>
            </div>
            <div className="bloqWidget">
                {cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className="card cardWidget">
                                <img
                                    src={`../img_producto/${item.img}.jpg`}
                                    className="card-img-top imgWidget"
                                    alt="..."
                                />
                                <div className="card-body text-widget">
                                    <h5 className="card-title fw-bold">{item.producto}</h5>
                                    <p className="card-text fw-bolder">
                                        Precio:
                                        <span className="spanInfo">
                                            {" "}
                                            ${formatNumber(item.precio)}
                                        </span>
                                    </p>
                                    <p className="card-text fw-bolder">
                                        Cantidad:
                                        <span className="spanInfo"> {item.cantidad}</span>
                                    </p>
                                    <p className="card-text fw-bolder">
                                        Subtotal:
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
                                        <BsFillTrashFill />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="bloqButtonClear">
                <p className="precioTotal">
                    Total de Compra :{" "}
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