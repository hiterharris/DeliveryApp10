import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { initialCurrentLocation, categoryData } from '../../assets/data';
import { Header } from '../../components';
import { COLORS, icons } from '../../constants';
import { MainCategories, RestaurantList } from './components';


const Home = () => {

    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);
    const [categories, setCategories] = useState(categoryData);
    const [selectedCategory, setSelectedCategory] = useState(categories[0])

    const onSelectCategory = (category) => {
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
            <RestaurantList />
        </SafeAreaView>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
})

export default Home;
