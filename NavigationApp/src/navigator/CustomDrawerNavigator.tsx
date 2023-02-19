import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {BottomTabsNavigator} from './BottomTabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const CustomDrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen
        name="TabsNavigator"
        options={{
          headerShown: false,
        }}
        component={BottomTabsNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{headerShown: false}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const DrawerMenu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar section */}
      <View>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Options Menu */}

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Icon color="black" name="logo-stackoverflow" size={25} />
          <Text style={styles.menuText}>Navigation stack</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon color="black" name="settings-outline" size={25} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
