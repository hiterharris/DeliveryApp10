import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { initialCurrentLocation } from '../../assets/data';
import { Header } from '../../components';
import { COLORS, icons } from '../../constants';


const Home = () => {

    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)

    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
            <Header
                title={currentLocation.streetName}
                clickHandlerLeft={() => navigation.navigate("Map")}
                clickHandlerRight={() => navigation.navigate("Cart", {cart: []})}
                iconLeft={icons.nearby}
                iconRight={icons.basket}
            />
            </SafeAreaView>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
})

export default Home;
