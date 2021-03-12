import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { icons, SIZES, COLORS, FONTS } from '../../../../constants';
import { images } from '../../../../constants';
import { styles } from './RestaurantListStyles';

const RestaurantList = (props) => {
    const { currentLocation, restaurants, categories, navigation } = props;

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name
        return ""
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginBottom: SIZES.padding * 2 }}
            onPress={() => navigation.navigate("Restaurant", {
                item,
                currentLocation
            })}
        >
            {/* Image */}
            <View style={{ marginBottom: SIZES.padding}}>
                <Image
                    source={images.burger_restaurant_1}
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
                    {item.categories.map((categoryId) => {
                        return (
                            <View style={{ flexDirection: 'row' }} key={categoryId}>
                                <Text>{getCategoryNameById(categoryId)}</Text>
                                <Text style={{ color: COLORS.darkgray }}> . </Text>
                            </View>
                        )
                    })}

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
            data={restaurants}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingHorizontal: SIZES.padding * 2,
                paddingBottom: 30
            }}
        />
    )
}

export default RestaurantList;