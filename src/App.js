import React, {Component} from 'react';
import './styles/App.css';
import {Constructor} from "./components/constructor/Constructor";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Constructor/>
            </div>
        );
    }
}

export default App;
