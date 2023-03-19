import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <div>
            <div className="card rounded-4">
                <img src={item.imagen} className="card-img-top"></img>
                <div className="card-body">
                    <h3 className="card-title">{item.nombre}</h3>
                    <p className="card-text">${item.precio}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <Link className="btn btn-outline-secondary" to={`/item/${item.id}`}> Ver Detalle</Link>
                </div>
            </div>
        </div>

           );
};

export default Item;