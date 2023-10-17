// src/components/PokeGallery.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';

const PokeGallery = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=12'
        );
        const results = response.data.results;

        const pokemonData = await Promise.all(
          results.map(async (result) => {
            const pokemonResponse = await axios.get(result.url);
            return {
              name: pokemonResponse.data.name,
              image: pokemonResponse.data.sprites.front_default,
              types: pokemonResponse.data.types.map((type) => type.type.name),
            };
          })
        );

        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="poke-gallery">
      {pokemonList.map((pokemon) => (
        <Pokemon
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default PokeGallery;
