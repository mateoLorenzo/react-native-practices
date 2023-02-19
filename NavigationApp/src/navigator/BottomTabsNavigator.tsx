import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const BottomTabsNavigator = () => {
  return Platform.OS === 'ios' ? (
    <IosTabsNavigator />
  ) : (
    <AndroidTabsNavigator />
  );
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const AndroidTabsNavigator = () => {
  return (
    <BottomTabAndroid.Navigator
      activeColor="white"
      inactiveColor="gray"
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Tab2Screen':
              iconName = focused ? 'planet' : 'planet-outline';
              break;
            case 'Tab3Screen':
              iconName = focused ? 'barbell' : 'barbell-outline';
              break;
            case 'StackNavigator':
              iconName = 'logo-stackoverflow';
              break;
          }

          return <Icon name={iconName} size={30} />;
        },
      })}>
      <BottomTabIos.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1 android'}}
        component={Tab1Screen}
      />
      <BottomTabIos.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={Tab2Screen}
      />
      <BottomTabIos.Screen
        name="Tab3Screen"
        options={{title: 'Tab 3'}}
        component={TopTabNavigator}
      />
      <BottomTabIos.Screen
        name="StackNavigator"
        options={{title: 'Stack Screen!'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIos = createBottomTabNavigator();

const IosTabsNavigator = () => {
  return (
    <BottomTabIos.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Tab2Screen':
              iconName = focused ? 'planet' : 'planet-outline';
              break;
            case 'Tab3Screen':
              iconName = focused ? 'barbell' : 'barbell-outline';
              break;
            case 'StackNavigator':
              iconName = 'logo-stackoverflow';
              break;
          }

          return <Icon name={iconName} size={30} />;
        },
      })}>
      <BottomTabIos.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <BottomTabIos.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={Tab2Screen}
      />
      <BottomTabIos.Screen
        name="Tab3Screen"
        options={{title: 'Tab 3', headerShown: false}}
        component={TopTabNavigator}
      />
      <BottomTabIos.Screen
        name="StackNavigator"
        options={{title: 'Stack Screen!', headerShown: false}}
        component={StackNavigator}
      />
    </BottomTabIos.Navigator>
  );
};
