import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const RestaurantList = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text>RestaurantList</Text>
        </SafeAreaView>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 4,
        alignItems: 'center',
    },
})

export default RestaurantList;
