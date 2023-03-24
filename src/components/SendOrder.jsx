import React, { useContext, useState } from "react";
import "../index.css";
import { CounterContext } from "../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const SendOrder = () => {
    const { cart, calcularTotalCompra, removeForm } = useContext(CounterContext)
    const [ordenID, setOrdenID] = useState(null)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {

        const db = getFirestore();
        e.preventDefault()
        const order = {
            buyer: {
                nombre: nombre,
                email: email
            },
            items: cart.map(product => ({ id: product.id, nombre: product.producto, precio: product.precio, cantidad: product.cantidad })),
            precio_total: calcularTotalCompra()
        }

        const orderCollection = collection(db, "orden")
        addDoc(orderCollection, order).then(({ id }) => {
            setOrdenID(id)
            Swal.fire(
                'Compra realizada!',
                'Su ID de compra es: <br> <b class="spanInfo">' + id + '</b>',
                'success'
            )
            removeForm()
        }
        )
    }

    return (
        <>
            <div className='BloqueForm'>
                <form onSubmit={handleSubmit}>
                    <div className="ms-auto mb-2 mb-lg-0">
                        <label className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value
                        )
                        } required />
                        <label className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setNombre(e.target.value
                        )
                        } required />
                    </div>
                    <div className='botonEnviar'>
                        <button type="submit" className="btn btn-warning">¡Comprar!</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SendOrder;