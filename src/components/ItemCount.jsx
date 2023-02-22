import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="d-flex flex-column">
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">

                <button type="button" className="btn btn-secondary" onClick={()=>setCounter(counter-1)}>-</button>
                <button type="button" className="btn btn-light">{counter}</button>
                <button type="button" className="btn btn-secondary" onClick={()=>setCounter(counter+1)}>+</button>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success">Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;