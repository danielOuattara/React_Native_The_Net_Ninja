import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutStackNavigation from './AboutStackNavigation';
import HomeStackNavigation from './HomeStackNavigation';



const Drawer = createDrawerNavigator();

export default function RootDrawerNavigation() {
  return (
      <NavigationContainer>
        < Drawer.Navigator initialRouteName = "HomeStack" >
          <Drawer.Screen name="HomeStack" component={HomeStackNavigation} />
          <Drawer.Screen name="AboutStack" component={AboutStackNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}