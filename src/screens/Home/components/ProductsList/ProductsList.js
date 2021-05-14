import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { SIZES, COLORS } from '../../../../constants';
import { styles } from './ProductstListStyles';

const ProductsList = (props) => {
    const { currentLocation, products, navigation } = props;

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginBottom: SIZES.padding * 2 }}
            onPress={() => navigation.navigate("Products", {
                item,
                currentLocation
            })}
        >
            <View style={{ marginBottom: SIZES.padding}}>
                <Image
                    source={{ uri: item.photo }}
                    resizeMode="cover"
                    style={styles.itemImage}
                />
                <View style={styles.itemDuration}>
                    <Text style={{ fontSize: 20 }}>Add Item</Text>
                </View>
            </View>
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <View style={{ marginTop: SIZES.padding, flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18 }}>${item.price}</Text>
                    <Text style={{ color: COLORS.darkgray, paddingLeft: 10, fontSize: 18 }}>Category</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <FlatList
            data={products}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingHorizontal: SIZES.padding * 2,
                paddingBottom: 30
            }}
        />
    )
}

export default ProductsList;