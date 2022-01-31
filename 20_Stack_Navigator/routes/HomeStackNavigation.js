
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './../screens/Home';
import ReviewDetails from './../screens/ReviewDetails';


const Stack = createNativeStackNavigator();

export default function HomeStackNavigation() {
    return (
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
              headerTintColor: 'white',
              headerStyle: { backgrouncdColor: 'tomato' },
            }} 
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ReviewsDetails" component={ReviewDetails} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

