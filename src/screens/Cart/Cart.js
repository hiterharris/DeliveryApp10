import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SIZES, COLORS, icons } from '../../constants';
import { Header } from '../../components';
import { useSelector } from 'react-redux';
import { useCart } from '../../store/state'

const Cart = ({ navigation }) => {
    const [cart, setCart] = useCart()

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Cart'} clickHandlerLeft={() => navigation.goBack()} iconLeft={icons.back} />
            {cart?.map((item, index) => {
                return (
                    <View key={index}>
                        <Text>{item.name}</Text>
                    </View>
                )
            })}
            <View   
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}
            >
                <TouchableOpacity
                    style={{
                        width: SIZES.width * 0.9,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.primary,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                    }}
                    onPress={() => navigation.navigate("OrderDelivery")}
                >
                    <Text style={{ color: COLORS.white, fontSize: 22 }}>Order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default Cart;
