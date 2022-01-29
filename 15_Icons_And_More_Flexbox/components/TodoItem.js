
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'


export default function TodoItem({ item, handleRemoveItem }) {
    const touchableRef = React.createRef();
    // const nodeTouchableRef = touchableRef.current;

    return (
        <TouchableOpacity onPress={() => handleRemoveItem(item.key)}>
            <View style={styles.item} ref={touchableRef}>
                <MaterialIcons style={styles.icon} name='delete'/>
                <Text style={styles.todoItem}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 12,
        marginTop: 16,
        color: '#606060',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'coral',
        borderRadius: 8,
        fontSize: 18,
        textTransform: 'capitalize',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'baseline',
    },
    icon:{
        flexBasis: 30,
        fontSize: 26,
        color:'coral',

    },
    todoItem: {
        // padding: 12,
        // marginTop: 16,
        color: '#606060',
        // borderWidth: 1,
        // borderStyle: 'dashed',
        // borderColor: 'coral',
        // borderRadius: 8,
        fontSize: 18,
        textTransform: 'capitalize',
        flex: 1,
    },
});