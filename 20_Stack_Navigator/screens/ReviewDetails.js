
import React from 'react';
import { Image, View, Text, ScrollView, Button } from 'react-native';
import globalStyles from '../styles/global';


export default function ReviewDetails({navigation}) {
    return (
        <View>
            <Button title='Go to Home' onPress={ () => navigation.navigate('Home')} />
            <ScrollView>
                <View style={globalStyles.container}>
                    <Text style={globalStyles.titleText}>Reviews DetailsScreen</Text>
                </View>
            </ScrollView>
        </View> 
    );
}
