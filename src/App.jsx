import React from 'react';
import "./App.css"
import SeminarList from './components/SeminarList/SeminarList';

function App() {
  return (
    <div className="App">
      <h1 className="App__h1">Список семинаров</h1>
      <SeminarList />
    </div>
  );
}

export default App;