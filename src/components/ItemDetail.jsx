import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ detalleProducto }) => {

    const { nombre, descripcion, precio, cantidad, imagen, id } = detalleProducto;

    function formatNumber(number) {
        return new Intl.NumberFormat().format(number)
    }

    return (
        <div>
            <div className="card df-itemdetail" key={id}>
                <img
                    src={`./public/imagenes/${imagen}.jpg`}
                    className="card-img-top imgProd"
                    alt="..."
                />
                <div className="card-body bg-warning">
                    <h5 className="card-title fw-bold">{nombre}</h5>
                    <p className="card-text fw-bolder">
                        Precio ARS: ${formatNumber(precio)}
                    </p>
                    <p className="card-text">Descripcion: {descripcion}</p>
                    <p className="card-text fw-bolder">Stock: {cantidad}</p>
                    <ItemCount stock={cantidad} id={id} precio={precio} nombre={nombre} imagen={imagen} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;