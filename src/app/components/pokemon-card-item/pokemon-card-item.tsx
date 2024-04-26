'use client'
import { SyntheticEvent, useEffect, useState } from "react";

import defaultPokemonImage from "~/images/pokemon.png";
import { Pokemon, PokemonResult } from "~/interfaces/pokemon";

import "./pokemon-card-item.scss";

const PokemonCardItem = (props: { pokemonResult: PokemonResult }) => {

  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetch(props.pokemonResult.url)
      .then((response) => response.json())
      .then((result: Pokemon) => {
        setPokemon(result)
      })
  }, [])

  return (
    <>
      <div className="pokemon-card">
        <span className="card-id">#{pokemon?.id}</span>
        <img
          className="card-image"
          alt={pokemon?.name}
          src={pokemon?.sprites.other["official-artwork"].front_default}
          onError={isErrorImage}
        />
        <span className="card-name">{pokemon?.name}</span>
      </div>
    </>
  );
};

const isErrorImage = (e: SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = defaultPokemonImage.src;
};

export default PokemonCardItem;
