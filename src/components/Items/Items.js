import React from 'react';
import "./Items.css"

export const MENU = [
    {name: 'Hamburger', image: 'food', cost: 110},
    {name: 'Coffee', image: 'drink', cost: 70},
    {name: 'Cheeseburger', image: 'food', cost: 90},
    {name: 'Tea', image: 'drink', cost: 40},
    {name: 'Fries', image: 'food', cost: 45},
    {name: 'Cola', image: 'drink', cost: 35}
];

const AddItems = ({addOrder}) => {
    return (
        <React.Fragment>
            {MENU.map((item, index) => {
                return (
                    <div className={"item " + item.type} key={index} onClick={() => addOrder(item.name)}>
                        <h4>{item.name}</h4>
                        <p>Price: {item.cost} SOM</p>
                    </div>
                );
            })}
        </React.Fragment>
    );
};

export default AddItems;