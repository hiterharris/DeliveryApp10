import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image
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
                title={item.name}
                clickHandlerLeft={() => navigation.goBack()}
                clickHandlerRight={() => navigation.navigate("Cart", {cart: []})}
                iconLeft={icons.back}
                iconRight={icons.basket}
            />
            <View style={styles.cardsContainer}>
                {item?.products?.map((item, index) => {
                    return (
                        <View key={index} style={styles.card}>
                            <Image source={{uri: item.brandPhoto}} style={{ height: 100, width: 150 }} resize="contain" />
                            <Text style={styles.cardText}>{item.brandName}</Text>
                        </View>
                    )
                })}
            </View>



        </SafeAreaView>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
    
    },
    cardText: {
        fontSize: 20
    }
})

export default Products;
