import React, {Component, useState} from 'react';
import './App.css';


const AppKolysikHook:React.FC = () =>  {
    let [counter, setCounter] = useState(0);
        return (
            <div className="App">
                <div>{counter}</div>
                <button onClick={() => {setCounter(counter + 1)}}>INC</button>
                <button onClick={() => {setCounter(counter - 1)}}>DEC</button>
            </div>
        );
};

export default AppKolysikHook;
