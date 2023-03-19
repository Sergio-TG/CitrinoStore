import React from 'react';
import Item from './Item';


const ItemList = ({ productList }) => {


    return (

        <div>
            <div className="df-itemlist">
                {productList.map((item) => (
                    <Item item={item}
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        precio={item.precio}
                        stock={item.stock}
                        categoria={item.categoria}
                        imagen={item.imagen}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemList;