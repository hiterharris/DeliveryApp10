import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';
import { Header } from '../../components';
import { icons } from '../../constants';
import { AddItemButton } from '../../components'
import { ScrollView } from 'react-native-gesture-handler';

const Product = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <SafeAreaView>
            <ScrollView style={{height: '100%'}}>
                <Header
                    title={item.name}
                    clickHandlerLeft={() => navigation.goBack()}
                    clickHandlerRight={() => navigation.navigate("Cart", {cart: []})}
                    iconLeft={icons.back}
                    iconRight={icons.basket}
                />
                    <Image
                        source={{ uri: item.photo }}
                        resizeMode="contain"
                        style={styles.itemPhoto}
                    />
                    <View style={styles.productDetails}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productName}>${item.price}</Text>
                        <Text style={styles.productDescription}>{item.description1}</Text>
                        <Text style={styles.productDescription}>{item.description2}</Text>
                    </View>
                    <AddItemButton item={item} />
                </ScrollView>
        </SafeAreaView>
        );
    };

const styles = StyleSheet.create({
    itemPhoto: {
        height: '50%',
    },
    productDetails: {
        margin: 10,
    },
    productDescription: {
        margin: 5,
        fontSize: 16
    },
    productName: {
        fontSize: 24,
        margin: 5
    }
})

export default Product;
