import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const CustomDrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
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
          <Text style={styles.menuText}>Navigation stack</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
