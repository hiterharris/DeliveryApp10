import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { initialCurrentLocation, categoryData } from '../../assets/data';
import { Header } from '../../components';
import { COLORS, icons } from '../../constants';
import { useRestaurantData } from '../../hooks/useRestaurantData';
import { MainCategories, RestaurantList } from './components';

const Home = ({ navigation }) => {

    const restaurantData = useRestaurantData();
    const [categories, setCategories] = useState(categoryData);
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [restaurants, setRestaurants] = useState()
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);

    useEffect(() => {
        setRestaurants(restaurantData)
    }, [restaurantData])

    const onSelectCategory = (category) => {
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={currentLocation.streetName}
                clickHandlerLeft={() => navigation.navigate("Map")}
                clickHandlerRight={() => navigation.navigate("Cart", {cart: []})}
                iconLeft={icons.nearby}
                iconRight={icons.basket}
            />
            <MainCategories
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
            />
            <RestaurantList
                currentLocation={currentLocation}
                restaurants={restaurants}
                categories={categories}
                navigation={navigation}
            />
        </SafeAreaView>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
})

export default Home;
