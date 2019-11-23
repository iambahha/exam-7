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
        const index = this.state.orders.findIndex(x => x.name===name);
        if (index === -1) {
            this.state.orders.push({name: name, num: 1});
        } else {
            this.state.orders[index].num++;
        }
        this.setState(this.state.orders);
    };

    removeOrder = name =>{
        let index = this.state.orders.findIndex(item => item.name === name);
        let copyIng = [...this.state.orders];
        let copyOb = {...copyIng[index]};
        copyOb.num--;
        if (copyOb.num <= 0){
            copyOb.num = 0;
        }
        copyIng[index] = copyOb;
        this.setState({orders : copyIng})
    };

    render() {
        return (
            <div className="container">
                <div className="Orders">
                    <Orders
                        orders={this.state.orders}
                        totalCost={this.state.totalCost}
                        removeOrder={name => this.removeOrder(name)}
                    />
                </div>
                <div className="AddItems">
                    <h1>Menu</h1>
                    <div className="items">
                        <AddItems addOrder={name => this.addOrder(name)} />
                    </div>
                </div>

            </div>
        );
    }
}

export default App;