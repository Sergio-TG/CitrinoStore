import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ detalleProducto }) => {

    const { producto, descripcion, precio, cantidad, img, id, category } = detalleProducto;

    function formatNumber(number) {
        return new Intl.NumberFormat().format(number)
    }

    return (
        <div>
            <div className="card cardProdDetail" key={id}>
                <img
                    src={`../public/img_producto/${img}.jpg`}
                    className="card-img-top imgProd"
                    alt="..."
                />
                <div className="card-body bg-white">
                    <h5 className="card-title fw-bold">{producto}</h5>
                    <p className="card-text fw-bolder">
                        Precio : ${formatNumber(precio)}
                    </p>
                    <p className="card-text fw-bolder">Categoría: {category}</p>
                    <p className="card-text">Descripción: {descripcion}</p>
                    <p className="card-text fw-bolder">Stock: {cantidad}</p>
                    <ItemCount stock={cantidad} id={id} precio={precio} producto={producto} img={img} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;