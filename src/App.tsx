import React, {Component} from 'react';
import './App.css';
class App extends Component {

    componentDidMount(): void {
        console.log('componentDidMount')
    }

    componentDidUpdate(): void {
        console.log('componentDidUpdate')
    }

    state = {
        skillNikola: 1,

    }


    render() {
        return (
            <div className="App">
                <div>Уровень знаний Колясика: {this.state.skillNikola}</div>
                <button onClick={() => {
                    this.setState({
                        counter: this.state.skillNikola + 1
                    })
                }}>+
                </button><button onClick={() => {
                    this.setState({
                        counter: this.state.skillNikola - 1
                    })
                }}>-
                </button>
            </div>
        );
    }
}

export default App;
