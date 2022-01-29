
import React from 'react';
import {StyleSheet, Text, View } from "react-native";

export default function SandBoxFlexBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        backgroundColor: '#aaa',
        flex: 1,
        // flexDirection: 'column',  // default
        flexDirection: 'row',

        // justifyContent:'center',
        // justifyContent:'flex-end',
        // justifyContent:'space-around',
        // justifyContent:'space-between',
        // justifyContent:'space-evenly',


        alignItems:'flex-start',
        // alignItems:'flex-end',
        // flexWrap: 'wrap'
    },
    boxOne: {
        backgroundColor:'violet',
        padding: 20,
        // flex: 1,
        height: 200
    },
    boxTwo: {
        backgroundColor:'gold',
        padding: 20,
        // flex: 1,
        height: 100
    },
    boxThree: {
        backgroundColor: 'coral',
        padding: 20,
        flex: 1,
        height: 500
    },
    boxFour: {
        backgroundColor: 'lightgreen',
        padding: 20,
        flex: 2,
    },
});