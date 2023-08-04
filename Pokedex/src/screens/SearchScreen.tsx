/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

export const SearchScreen = () => {
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');
  const [pokemonsFiltered, setPokemonsFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.trim().length === 0) {
      return setPokemonsFiltered(simplePokemonList);
    }

    const pokemonsList = simplePokemonList.filter(poke =>
      poke.name.toLowerCase().includes(term.toLowerCase()),
    );
    setPokemonsFiltered(pokemonsList);
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        ...styles.screenContainer,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
      }}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          ...styles.searchInputStyles,
          top: Platform.OS === 'ios' ? top / 2 : top + 10,
        }}
      />

      <FlatList
        data={pokemonsFiltered}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.cardsContainer,
              marginTop: Platform.OS === 'ios' ? top + 40 : top + 80,
            }}>
            {term}
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 80,
  },
  searchInputStyles: {
    position: 'absolute',
    zIndex: 999,
    width: '100%',
  },
  cardsContainer: {
    fontSize: 35,
    fontWeight: 'bold',
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    marginTop: 20,
  },
  loadingText: {
    marginTop: 10,
  },
});
