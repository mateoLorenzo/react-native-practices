import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {PokemonCard} from '../components/PokemonCard';

export const SearchScreen = () => {
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const {top} = useSafeAreaInsets();

  if (isFetching) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator
          color="grey"
          size={30}
          style={styles.activityIndicator}
        />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        ...styles.screenContainer,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
      }}>
      <SearchInput />

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
              top: top,
              marginBottom: top + 20,
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
  title: {},
  globalMargin: {},
});
