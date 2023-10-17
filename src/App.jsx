// src/App.js
import React from 'react';
import PokeGallery from './Components/PokeGallery';
import './App.css'; // Add this line to import the default CSS file

function App() {
  return (
    <div className="App">
      <h1>Pokemon Gallery</h1>
      <PokeGallery />
    </div>
  );
}

export default App;
