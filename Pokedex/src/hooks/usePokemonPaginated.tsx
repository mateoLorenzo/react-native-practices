/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    nextPageUrl.current = resp.data.next;
    console.log('resp.data.results', resp.data.results);
    mapPokemonList(resp.data.results);
    // setSimplePokemonList(resp.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    pokemonList.forEach(pokemon => {
      console.log('pokemon', pokemon);
    });
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList,
  };
};
