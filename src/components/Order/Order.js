import React, { Component } from 'react';
import {MENU} from "../../components/Items/Items";
import './Order.css';

class Orders extends Component {
    render() {
        let orders = [];
        let totalCost = this.props.totalCost;
        if (this.props.orders.length) {
            orders = this.props.orders.map((item, index) => {
                    const menuIndex = MENU.findIndex(food => food.name===item.name);
                    totalCost += item.num * MENU[menuIndex].cost;

                    return (
                        <li className="order" key={index}>{item.name}
                        <p> <span className="num" >x{item.num} </span> {MENU[menuIndex].cost} KGS
                        <button onClick={this.props.removeOrder}>X</button></p>
                        </li>
                    );

            });
        } else {
            orders = 'Order is empty!';
        }

        return (
            <div>
                <ol>{orders}</ol>
                <p className="total">Общая стоимость заказа: <b>{totalCost} сом</b></p>
            </div>
        );
    }
}

export default Orders;