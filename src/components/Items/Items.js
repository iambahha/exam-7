import React from 'react';
import "./Items.css"

export const MENU = [
    {name: 'Hamburger',cost: 110},
    {name: 'Coffee',cost: 70},
    {name: 'Cheeseburger',cost: 90},
    {name: 'Tea',cost: 40},
    {name: 'Fries',cost: 45},
    {name: 'Cola',cost: 35}
];

const AddItems = ({addOrder}) => {
    return (
            MENU.map((item, index) => {
                return (
                    <div className="item" key={index} onClick={() => addOrder(item.name)}>
                        <h4>{item.name}</h4>
                        <p>Price: {item.cost} SOM</p>
                    </div>
                );
            })
    );
};

export default AddItems;