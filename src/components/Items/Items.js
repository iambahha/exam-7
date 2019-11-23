import React from 'react';
import "./Items.css"

export const MENU = [
    {name: 'Hamburger', image: '', price: 80},
    {name: 'Coffee', image: '', price: 70},
    {name: 'Cheeseburger', image: '', price: 90},
    {name: 'Tea', image: '', price: 50},
    {name: 'Fries', image: '', price: 45},
    {name: 'Cola', image: '', price: 40}
];

const Items = ({addOrder}) => {
    return (
            MENU.map((item, index) => {
                return (
                    <div className={"item " + item.type} key={index} onClick={() => addOrder(item.name)}>
                        <h4>{item.name}</h4>
                        <p>Price: {item.price} KGS</p>
                    </div>
                );
            })
    );
};
export default Items;