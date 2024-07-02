// src/App.js
import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My Calculator</h1>
            </header>
            <main>
                <Calculator />
            </main>
        </div>
    );
};

export default App;
