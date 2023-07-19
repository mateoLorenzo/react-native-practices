import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {FadeInImage} from '../components/FadeInImage';

export const HomeScreen = () => {
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
            <FadeInImage uri={item.picture} style={{height: 100, width: 100}} />
          </TouchableOpacity>
        )}
        //infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={<ActivityIndicator />}
      />
    </>
  );
};
