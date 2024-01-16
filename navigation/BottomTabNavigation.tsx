import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Search, Profile} from '../screens';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../constants/index';

const Tab = createBottomTabNavigator();

const screenOptions: object = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 60,
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name={focused ? 'home' : 'home'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name={'search'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name={focused ? 'user' : 'user'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
