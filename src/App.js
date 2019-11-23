import React, {Component} from 'react';
import nanoid from 'nanoid';
import './App.css';

class App extends Component {
    state = {
        menu: [
            {name : 'Hamburger', count : 0},
            {name : 'Cheeseburger', count : 0},
            {name : 'Fries', count : 0},
            {name : 'Coffee', count : 0},
            {name : 'Tea', count : 0},
            {name : 'Cola', count : 0},
        ]
    };

  render() {
    return (
        <div>

        </div>
    );
  }
}

export default App;