import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import "../index.css";

const Item = ({ item }) => {

    const { setCart } = useContext(CartContext);
    let [Agregar] = useState(1);

    const agregarAlCarrito = () => {
        setCart((agrItems) => {
            const itemAgregado = agrItems.find((items) => items.id === id);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Producto agregado al carrito",
                showConfirmButton: false,
                timer: 1300,
            });

            if (itemAgregado) {
                return agrItems.map((items) => {
                    if (items.id === id) {
                        return { ...items, cantidad: items.cantidad + Agregar };
                    } else {
                        return items;
                    }
                });
            } else {
                return [...agrItems, { id, cantidad: Agregar, precio, nombre, imagen }];
            }
        });
    };

    return (
        <div>
            <div className="card cardProd rounded-4" key={id}>
                <img src={`./public/imagenes/${imagen}.jpg`} className="card-img-top"></img>
                <div className="card-body">
                    <h3 className="card-title">{nombre}</h3>
                    <p className="card-text">${precio}</p>
                    <p className="card-text">Stock: {cantidad}</p>
                    <hr />
                    <Link className="btn btn-outline-secondary" to={`/item/${id}`}> Ver Detalle</Link>
                    <button
                        className="btn btn-secondary"
                        onClick={() => agregarAlCarrito()}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Item;