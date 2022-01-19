
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function TodoItem({ item, handleRemoveItem }) {
    return (
        <TouchableOpacity onPress={() => handleRemoveItem(item.key)}>
            <Text style={styles.todoItem}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todoItem: {
        padding: 16,
        marginTop: 16,
        color: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        backgroundColor: 'coral',
        borderRadius: 4,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});