import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
];

const Home = () => {
  const renderMenuItem = (menuItem: MenuItem) => (
    <View>
      <Text>
        {menuItem.name} - {menuItem.icon}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
});
