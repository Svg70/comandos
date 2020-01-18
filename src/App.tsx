import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// import {Interface} from "readline";


class App extends Component {

    componentDidMount(): void {
        console.log('componentDidMount')
    }

    componentDidUpdate(): void {
        console.log('componentDidUpdate')
    }

    state = {
        counter: 1
    }


    render() {
        return (
            <div className="App">
                <div>{this.state.counter}</div>
                <button onClick={() => {
                    this.setState({
                        counter: this.state.counter + 1
                    })
                }}>+
                </button><button onClick={() => {
                    this.setState({
                        counter: this.state.counter - 1
                    })
                }}>-
                </button>
            </div>
        );
    }
}

export default App;
