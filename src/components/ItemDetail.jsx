import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ detalleProducto }) => {

    const { producto, descripcion, precio, cantidad, img, id } = detalleProducto;

    function formatNumber(number) {
        return new Intl.NumberFormat().format(number)
    }

    return (
        <div>
            <div className="card cardProdDetail" key={id}>
                <img
                    src={`../src/assets/img_producto/${img}.jpg`}
                    className="card-img-top imgProd"
                    alt="..."
                />
                <div className="card-body bg-warning">
                    <h5 className="card-title fw-bold">{producto}</h5>
                    <p className="card-text fw-bolder">
                        Precio ARS: ${formatNumber(precio)}
                    </p>
                    <p className="card-text">Descripcion: {descripcion}</p>
                    <p className="card-text fw-bolder">Stock: {cantidad}</p>
                    <ItemCount stock={cantidad} id={id} precio={precio} producto={producto} img={img} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;