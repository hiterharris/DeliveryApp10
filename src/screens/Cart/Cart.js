import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SIZES, COLORS, icons } from '../../constants';
import { Header } from '../../components';

const Cart = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Cart'} clickHandlerLeft={() => navigation.goBack()} iconLeft={icons.back} />
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
