import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces';
import {useNavigation} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate(menuItem.component as never)}
      activeOpacity={0.6}
      style={styles.button}>
      <View style={styles.itemsContainer}>
        <Icon name={menuItem.icon} size={30} color={'black'} />

        <Text style={styles.itemName}>{menuItem.name}</Text>
      </View>
      <Icon name="chevron-forward-outline" size={25} color={'black'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {color: 'black', marginLeft: 15, fontSize: 20},
});
