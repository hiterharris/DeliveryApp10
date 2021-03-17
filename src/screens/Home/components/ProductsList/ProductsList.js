import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { icons, SIZES, COLORS, FONTS } from '../../../../constants';
import { styles } from './ProductstListStyles';

const ProductsList = (props) => {
    const { currentLocation, products, categories, navigation } = props;

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name
        return ""
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginBottom: SIZES.padding * 2 }}
            onPress={() => navigation.navigate("Products", {
                item,
                currentLocation
            })}
        >
            {/* Image */}
            <View style={{ marginBottom: SIZES.padding}}>
                <Image
                    source={{ uri: item.photo }}
                    resizeMode="cover"
                    style={styles.itemImage}
                />
                <View style={styles.itemDuration}>
                    <Text>{item.duration}</Text>
                </View>
            </View>

            {/* Restaurant Info */}
            <Text style={{ fontSize: 20 }}>{item.name}</Text>

            <View style={{ marginTop: SIZES.padding, flexDirection: 'row' }}>
                {/* Rating */}
                <Image
                    source={icons.star}
                    style={styles.rating}
                />
                <Text>{item.rating}</Text>

                {/* Categories */}
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    {/* {item.category.map((categoryId) => {
                        return (
                            <View style={{ flexDirection: 'row' }} key={categoryId}>
                                <Text>{getCategoryNameById(categoryId)}</Text>
                                <Text style={{ color: COLORS.darkgray }}> . </Text>
                            </View>
                        )
                    })} */}

                    {/* Price */}
                    {[1, 2, 3].map((priceRating) => (
                        <Text key={priceRating} style={{ color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray }}>$</Text>
                    ))}
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