import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  componentDidMount(): void {
    console.log('componentDidMount')
  }

  componentDidUpdate(): void {
    console.log('componentDidUpdate')
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
          </header>
        </div>
    );
  }
}

export default App;
