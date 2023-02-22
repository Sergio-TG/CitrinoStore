import React from 'react';
import Item from './Item';


const ItemList = ({ productList }) => {


    return (

        <div>
            <div className="df-itemlist">
                {productList.map((item) => (
                    <Item item={item}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemList;