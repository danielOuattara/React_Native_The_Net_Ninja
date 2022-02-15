
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About';


const Stack = createNativeStackNavigator();

export default function HomeStackNavigation() {
    return (
      <Stack.Navigator 
        initialRouteName='About'
        screenOptions = {
          {
            headerStyle: {
              backgroundColor: '#f4511e',
              height: 120
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }
        }
      >
        <Stack.Screen 
          name="About" 
          component={About} 
          options={{ title: 'About Reviews' }}
        />
      </Stack.Navigator>
    );
}

