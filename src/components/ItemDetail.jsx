import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ productDetail}) => {
       return (
        <div>
            <div className="card">
                <img src="" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">imagen</h5>
                        <p className="card-text">$ Precio</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Producto</li>
                        <li className="list-group-item">Detalle</li>
                        <li className="list-group-item">Stock</li>
                    </ul>
                    <div className="card-body">
                    <div><ItemCount /></div>
                    </div>
            </div>
        </div>
    );
};

export default ItemDetail;