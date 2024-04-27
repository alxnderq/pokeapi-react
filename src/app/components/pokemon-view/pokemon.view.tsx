'use client'

import { useEffect, useState } from "react";
import PokemonCardItem from "../pokemon-card-item/pokemon-card-item";
import PokemonTitle from "../pokemon-title/pokemon-title";

import { PokemonList } from "~/interfaces/pokemon";

import Link from "next/link";
import "./pokemon.view.scss";

const PokemonView = (): JSX.Element => {

  const [data, setData] = useState<PokemonList>();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data: PokemonList) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <>
      <div className="pokemon-container">
        <PokemonTitle />

        <div className="pokemon-list-container">
          <div className="pokemon-list">
            {data?.results.map((item) => (
              <Link href={{
                pathname: '/pokemon/[name]',
                query: { name: item.name }
              }}>
                <PokemonCardItem key={item.name} pokemonResult={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonView;
