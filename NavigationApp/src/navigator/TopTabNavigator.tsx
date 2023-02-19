import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {LogBox} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarPressColor: 'red', //Only works for android
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
        },
        tabBarIcon: ({focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Chat':
              iconName = focused ? 'chatbox' : 'chatbox-outline';
              break;
            case 'Contacts':
              iconName = focused ? 'skull' : 'skull-outline';
              break;
            case 'Albums':
              iconName = focused ? 'star' : 'star-outline';
              break;
          }

          return <Icon name={iconName} size={25} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
