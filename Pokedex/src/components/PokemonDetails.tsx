import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={styles.screenContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.typesSectionContainer}>
        <Text style={styles.title}>Types</Text>
        <View style={styles.typesContainer}>
          {pokemon.types.map(({type}) => (
            <Text style={styles.regularText} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight}kg</Text>
      </View>

      <View style={styles.spritesContainer}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>

      <View style={styles.container}>
        <Text style={styles.title}>Habilidades base</Text>
        <View style={styles.typesContainer}>
          {pokemon.abilities.map(({ability}) => (
            <Text style={styles.regularText} key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Movimientos</Text>
        <View style={styles.movesContainer}>
          {pokemon.moves.map(({move}) => (
            <Text style={styles.regularText} key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View key={`${stat.stat.name} - ${i}`} style={styles.statContainer}>
              <Text style={styles.statName}>{stat.stat.name}</Text>
              <Text style={styles.statText}>{stat.base_stat}</Text>
            </View>
          ))}
        </View>

        <View style={styles.finalSprite}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  typesSectionContainer: {
    marginTop: 370,
    marginHorizontal: 20,
  },
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  typesContainer: {
    flexDirection: 'row',
  },
  regularText: {
    fontSize: 19,
    marginRight: 10,
  },
  spritesContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
  movesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  statContainer: {
    flexDirection: 'row',
  },
  statName: {
    fontSize: 19,
    marginRight: 10,
    width: 150,
  },
  statText: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  finalSprite: {
    marginBottom: 20,
    alignItems: 'center',
  },
});
