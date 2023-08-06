import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {PokemonCard} from '../components/PokemonCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  const {top} = useSafeAreaInsets();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View style={screenStyles.screenContainer}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          //Header component
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                ...screenStyles.title,
                top: top,
                marginBottom: top + 20,
              }}>
              Pokedex
            </Text>
          }
          //infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={screenStyles.loader} />
          }
        />
      </View>
    </>
  );
};

const screenStyles = StyleSheet.create({
  screenContainer: {
    alignItems: 'center',
  },
  title: {
    paddingBottom: 10,
  },
  loader: {
    marginBottom: 100,
  },
});
