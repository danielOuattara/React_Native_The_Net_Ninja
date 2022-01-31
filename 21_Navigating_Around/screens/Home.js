
import React from 'react';
import { Image, View, Text, ScrollView, Button } from 'react-native';
import globalStyles from '../styles/global';


export default function Home({navigation}) {
    return (
        <View>
            <Button 
                title='Go to reviews details'
                onPress={ () => navigation.navigate('ReviewsDetails')}
            />
         <ScrollView>
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>Welcome to Home Screen</Text>
            </View>
            <Image source={require('./../assets/flower.jpg')} /> 
            <Image source={require('./../assets/flower2.jpg')} /> 
            <Image source={require('./../assets/flower3.jpg')} /> 
          </ScrollView>
        </View> 
    );
}



