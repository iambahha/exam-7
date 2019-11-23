import React, {Component} from 'react';
import Order from "../src/components/Order/Order"
import Items from "../src/components/Items/Items"
import './App.css';

class App extends Component {
    state = {
        menu: [],
        totalSum: 0
    };

    addOrder = name => {
        let index = this.state.menu.findIndex(item => item.name === name);
        let copyIng = [...this.state.menu];
        let copyOb = {...copyIng[index]};
        copyOb.count++;
        copyIng[index] = copyOb;
        this.setState({menu : copyIng})
    };

    removeOrder = name =>{
        let index = this.state.menu.findIndex(item => item.name === name);
        let copyIng = [...this.state.menu];
        let copyOb = {...copyIng[index]};
        copyOb.count--;
        if (copyOb.count <= 0){
            copyOb.count = 0;
        }
        copyIng[index] = copyOb;
        this.setState({menu : copyIng})
    };
  render() {

    return (
        <div className="container">
            <div className="order">
                <Order
                    menu={this.state.menu}
                    totalSum={this.state.totalSum}
                    removeOrder={name => this.removeOrder(name)}
                />
            </div>
            <div className="addItems">
                <h1>Menu</h1>
                <Items addOrder={name => this.addOrder(name)} />
            </div>
        </div>
    );
  }
}

export default App;