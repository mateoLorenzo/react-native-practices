import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate(menuItem.component as never)}
      style={styles.container}>
      <Icon name={menuItem.icon} size={23} color="grey" />
      <Text style={styles.itemText}>{menuItem.name}</Text>
      <View style={styles.spacer} />
      {/* Spacer ↑↑↑, very cool  */}
      <Icon name="chevron-forward-outline" size={23} color="grey" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
  spacer: {
    flex: 1,
  },
});