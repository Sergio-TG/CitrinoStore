import React, { useContext, useState } from "react";
import "../index.css";
import { CartContext } from "../context/CartContext.jsx";
import { collection, getFirestore, addDoc } from "firebase/firestore";


export const CartOrder = () => {
    const { cartList, setCartList, fullPayment } = useContext(CartContext);
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")
    const [loading, setLoading] = useState(false)
  
    const orderGenerator = () => {      
  
      const date = new Date()
      const order = {
        buyer: { name: name, phone: phone, email: email },
        items: cartList.map(item => ({ id: item.id, nombre: item.nombre, cantidad: item.cantidad, precio: item.precio, precio_total: item.cantidad * item.precio })),
        total: fullPayment(),
        order_date: `${date}`
      }
  
      const ordersCollection = collection(db, "orders")
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
      setLoading(true)
      setCartList([])
  
      cartList.forEach(async item => {
        const ItemRef = doc(collection(db, 'cristales'), item.id)
        await updateDoc(ItemRef, {
          stock: increment(-item.cantidad)
        })
      })
    }
  
    return (
      <>
        {loading}
        <div className="container cartBody">
          <div className="row my-5">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label id="nombre" className="form-label">Nombre:</label>
                  <input type="text" className="form-control" placeholder="Eva Luna" onInput={(e) => { setName(e.target.value) }} />
                </div>
                <div className="mb-3">
                  <label id="telefono" className="form-label">Teléfono:</label>
                  <input type="tel" className="form-control" id="telefono" placeholder="37339675"  onInput={(e) => { setPhone(e.target.value) }} />
                </div>
                <div className="mb-3">
                  <label id="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="ventaonline@mundolibre.com" onInput={(e) => { setEmail(e.target.value) }} />
                </div>
                <button type="button" className="cart_endBtn " onClick={orderGenerator}>Generar Orden</button>
              </form>
            </div>
            <div className="col-md-6">
              <table className="table">
                <tbody>
                  {cartList.map(item => (
                    <tr key={item.id}>
                      <td><img src={item.imagen} alt={item.nombre} width={50} /></td>
                      <td className="align-middle">{item.nombre}</td>
                      <td className="align-middle text-center">{item.cantidad}</td>
                      <td className="align-middle text-end">${(item.cantidad * item.precio).toLocaleString()}</td>
                    </tr>
                  ))
                  }
                  <tr>
                    <td colSpan={2}>&nbsp;</td>
                    <td className="text-end"><b>Total a Pagar </b></td>
                    <td className="text-end"><b>${fullPayment().toLocaleString()}</b></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div>
              {orderId !== "" ? <Navigate to={"/CartGreeting/" + orderId} /> : ""}
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default CartOrder;