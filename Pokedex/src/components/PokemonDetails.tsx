import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Types</Text>
        <View style={styles.typesContainer}>
          {pokemon.types.map(({type}) => (
            <Text style={styles.regularText} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={{...styles.container, marginTop: 20}}>
        <Text style={styles.title}>Types</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 370,
  },
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  typesContainer: {
    flexDirection: 'row',
  },
  regularText: {
    fontSize: 19,
    marginRight: 10,
  },
});
