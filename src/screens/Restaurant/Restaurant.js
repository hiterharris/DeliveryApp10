import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text
} from 'react-native';
import { Header } from '../../components';
import { COLORS, icons } from '../../constants';

const Restaurant = ({ route, navigation }) => {

    const { item, currentLocation } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={currentLocation.streetName}
                clickHandlerLeft={() => navigation.goBack()}
                clickHandlerRight={() => navigation.navigate("Cart", {cart: []})}
                iconLeft={icons.back}
                iconRight={icons.basket}
            />
            <Text>{item.name}</Text>
        </SafeAreaView>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
})

export default Restaurant;
