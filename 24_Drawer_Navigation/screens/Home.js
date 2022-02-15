
import React, { useState } from 'react';
import { Image, View, Text, ScrollView, FlatList, TouchableOpacity  } from 'react-native';
import globalStyles from './../styles/global';


export default function Home({ navigation }) {

    const [ reviews, setReviews] = useState([
        {title: "Zelda", rating: 5, body:"lorem ipsum Zelda", key:"1"},
        {title: "Gotta", rating: 4, body:"lorem ipsum Gotta", key:"2"},
        {title: "Fantasy", rating: 3, body:"lorme ipsum Fantasy", key:"3"},
    ])
    // const serializedReviews = JSON.stringify(reviews);

    return (
        <View style={globalStyles.container}>
            <View>
                <FlatList
                  data={reviews}
                  renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', {item})}>
                          <Text style={globalStyles.titleText}> + {item.title}</Text>
                      </TouchableOpacity>
                  )}
                />
            </View>

       <ScrollView>
            <Image source={require('./../assets/flower.jpg')} /> 
            <Image source={require('./../assets/flower2.jpg')} /> 
            <Image source={require('./../assets/flower3.jpg')} /> 
        </ScrollView>
            </View>
    );
}



