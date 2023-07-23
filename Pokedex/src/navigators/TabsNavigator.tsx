/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigator} from './StackNavigator';
import {SearchScreen} from '../screens/SearchScreen';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const RenderIcon = ({color, icon}: {color: string; icon: string}) => (
  <Icon name={icon} color={color} size={20} />
);

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => RenderIcon({color, icon: 'list-outline'}),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => RenderIcon({color, icon: 'search-outline'}),
        }}
      />
    </Tab.Navigator>
  );
};
