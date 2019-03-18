import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HellowWorld from './HellowWorld';
import { store } from './stores'
import ButtonGroup from './ButtonGroup';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <HellowWorld tech={ store.getState().tech } />
                    <ButtonGroup technologies={['React', 'Redux']}/>
                </header>
            </div>
        );
    }
}

export default App;
