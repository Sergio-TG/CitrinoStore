import React from "react";
import Item from "./Item";
import "../index.css";

const ItemList = ({ product }) => {

    return (
        <div className='BloqueProd'>
            {
                product.map((prod) => {
                    return (
                        <div key={prod.id} className="listProd">
                            <Item
                                id={prod.id}
                                producto={prod.producto}
                                precio={prod.precio}
                                cantidad={prod.cantidad}
                                descripcion={prod.descripcion}
                                img={prod.img}
                                category={prod.category} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default React.memo(ItemList);