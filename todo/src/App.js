import React from 'react';
import ToDoList from './components/ToDoList';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>cute to♥do</h1>
        <p>Welcome to cute to♥do list app!</p>
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
