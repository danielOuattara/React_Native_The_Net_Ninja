
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
              name="Home" 
              component={Home} 
              options={{ title: 'GameZone' }}
            />
            <Stack.Screen 
              name="ReviewDetails" 
              component={ReviewDetails} 
              options={{ title: 'Review Detailsc' }}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
}

