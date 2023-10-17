import React from 'react';

const Pokemon = ({ name, image, types }) => (
  <div className="pokemon-card">
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>Types: {types.join(', ')}</p>
  </div>
);

export default Pokemon;
