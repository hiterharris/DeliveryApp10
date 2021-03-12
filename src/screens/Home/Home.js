import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { initialCurrentLocation, categoryData, productsCategories } from '../../assets/data';
import { Header } from '../../components';
import { icons } from '../../constants';
import { fetchData } from '../../helpers/fetchData';
import { MainCategories, RestaurantList } from './components';
import { styles } from './HomeStyles';

const Home = ({ navigation }) => {

    const restaurantData = fetchData('products');
    console.log(restaurantData)
    const [categories, setCategories] = useState(productsCategories);
    const [selectedCategory, setSelectedCategory] = useState()
    const [restaurants, setRestaurants] = useState()
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);

    useEffect(() => {
        setRestaurants(restaurantData)
    }, [restaurantData])

    const onSelectCategory = (category) => {
        let restaurantList = restaurantData.filter(a => a.category.includes(category.id))
        setRestaurants(restaurantList)
        setSelectedCategory(category)
    }

    console.log(selectedCategory)

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


export default Home;
