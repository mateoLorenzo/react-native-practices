import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  // Text,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../theme/appTheme';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  // const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Image
              source={{uri: item.picture}}
              style={{height: 100, width: 100}}
            />
          </TouchableOpacity>
        )}
        //infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={<ActivityIndicator />}
      />

      {/* <Text
        style={{...styles.title, ...styles.globalMargin, marginTop: top + 20}}>
        Pokedex
      </Text> */}
    </>
  );
};
