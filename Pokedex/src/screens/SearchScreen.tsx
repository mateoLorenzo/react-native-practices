import React from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';

export const SearchScreen = () => {
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const {top} = useSafeAreaInsets();

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
        style={{
          ...styles.searchInputStyles,
          top: Platform.OS === 'ios' ? top / 2 : top + 10,
        }}
      />

      <FlatList
        data={simplePokemonList}
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
            Pokedex
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
