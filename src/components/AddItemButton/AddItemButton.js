import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';

const AddItemButton = (props) => {
    const { item } = props;

    return (
        <TouchableOpacity style={styles.addButton} onPress={() => console.log(item)}>
            <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButton: {
        height: 30,
        margin: 10,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    addButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
})

export default AddItemButton;