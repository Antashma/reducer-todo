import React from 'react';
import ToDoList from './components/ToDoList';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>to♥do</h1>
        <h2>get busy❣</h2>
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
