import React from "react";
import { useState, useContext } from "react";
import { CounterContext } from "../context/CartContext";
import Swal from "sweetalert2";
import "../index.css";

const ItemCount = ({ stock, id, precio, producto, img }) => {

    const { setCart } = useContext(CounterContext);
    let [Agregar, SetAgregar] = useState(1)

    const AgregarProd = () => {
        if (Agregar < stock) {
            SetAgregar(Agregar + 1)
        }
    }

    const Descontar = () => {
        if (Agregar > 1) {
            SetAgregar(Agregar - 1)
        }
    }

    const agregarAlCarrito = () => {
        setCart((agrItems) => {
            const itemAgregado = agrItems.find((items) => items.id === id);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El item se agregó al carrito',
                showConfirmButton: false,
                timer: 1500
            })

            if (itemAgregado) {
                return agrItems.map((items) => {
                    if (items.id === id) {
                        return { ...items, cantidad: items.cantidad + Agregar };
                    } else {
                        return items;
                    }
                })
            } else {
                return [...agrItems, { id, cantidad: Agregar, precio, producto, img }];
            }
        })
    }

    return (
        <>
            <div className='BloqueCount'>
                <button onClick={Descontar} className="btn btn-secondary">-</button>
                <span className='SpanCount'>{Agregar} </span>
                <button onClick={AgregarProd} className="btn btn-secondary">+</button>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
            </div>
        </>
    );
};

export default ItemCount;