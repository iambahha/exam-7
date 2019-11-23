import React, {Component} from 'react';
import Orders from "../src/components/Order/Order"
import AddItems from "../src/components/Items/Items"
import './App.css';

class App extends Component {
    state = {
        orders: [],
        totalCost: 0
    };

    addOrder = name => {
        const orders = this.state.orders;
        const index = orders.findIndex(x => x.name===name);
        if (index === -1) {
            orders.push({name: name, num: 1});
        } else {
            orders[index].num++;
        }
        this.setState(orders);
    };

    removeOrder = index => {
        const orders = this.state.orders;

        if ( orders[index].num > 1) {
            orders[index].num--;
        } else {
            orders.pop(index);
        }
        this.setState(orders);
    };

    render() {
        return (
            <div className="App">
                <div className="Orders">
                    <Orders
                        orders={this.state.orders}
                        totalCost={this.state.totalCost}
                        removeOrder={index => this.removeOrder(index)}
                    />
                </div>
                <div className="AddItems">
                    <h1>Menu</h1>
                    <AddItems addOrder={name => this.addOrder(name)} />
                </div>

            </div>
        );
    }
}

export default App;