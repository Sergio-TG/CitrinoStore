import React from "react";
import Item from "./Item";
import "../index.css";


const ItemList = ({ product }) => {


    return (
        <div className="df-itemlist">
        {
            product.map((prod) => {
                return (
                    <div key={prod.id} className="listProd">
                        <Item
                            id={prod.id}
                            nombre={prod.nombre}
                            precio={prod.precio}
                            cantidad={prod.cantidad}
                            descripcion={prod.descripcion}
                            imagen={prod.imagen}
                            categoria={prod.categoria} />
                    </div>
                )
            })
        }
    </div>

    );
};

export default React.memo(ItemList);