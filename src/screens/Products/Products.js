import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native';
import { Header } from '../../components';
import { COLORS, icons } from '../../constants';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../state';

const Products = ({ route, navigation }) => {
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartActions.addItem(cart))
    }, [cart])

    // onPress={() => setCart([...cart, item])}

    const { item, currentLocation } = route.params;
    console.log(item)
    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={currentLocation.streetName}
                clickHandlerLeft={() => navigation.goBack()}
                clickHandlerRight={() => navigation.navigate("Cart", {cart: []})}
                iconLeft={icons.back}
                iconRight={icons.basket}
            />
            {item?.products?.map((item, index) => {
                return (
                    <View key={index}>
                        <Text>{item.brandName}</Text>
                    </View>
                )
            })}

        </SafeAreaView>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
})

export default Products;
