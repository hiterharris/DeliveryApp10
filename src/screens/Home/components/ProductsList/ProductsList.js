import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { SIZES  } from '../../../../constants';
import { styles } from './ProductstListStyles';

const ProductsList = (props) => {
    const { currentLocation, products, navigation } = props;

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate("Products", {
                item,
                currentLocation
            })}
        >
            <View style={styles.productCardImage}>
                <Image
                    source={{ uri: item.photo }}
                    resizeMode="contain"
                    style={styles.itemImage}
                />
            </View>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.name}>{item.name.slice(0,20)}</Text>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Item</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )

    return (
        <FlatList
            data={products}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={{
                paddingHorizontal: SIZES.padding * 2,
                paddingBottom: 30,
            }}
        />
    )
}

export default ProductsList;