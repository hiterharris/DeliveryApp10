import React, { useEffect, useState } from 'react';
import { SafeAreaView, Button } from 'react-native';
import { initialCurrentLocation } from '../../assets/data';
import { Header } from '../../components';
import { icons } from '../../constants';
import { fetchData } from '../../helpers/fetchData';
import { MainCategories, ProductsList } from './components';
import { styles } from './HomeStyles';

const Home = ({ navigation }) => {
    const allProducts = fetchData('products/all');
    const productsData = fetchData('products');
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [products, setProducts] = useState();
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);

    useEffect(() => {
        setProducts(allProducts)
    }, [allProducts])

    const onSelectCategory = (category) => {
        if (category.id == 1) {
            setProducts(productsData[0].products)
            setSelectedCategory(category)
        } else if (category.id == 2) {
            setProducts(productsData[1].products)
            setSelectedCategory(category)
        } else if (category.id == 3) {
            setProducts(productsData[2].products)
            setSelectedCategory(category)
        } else if (category.id == 4) {
            setProducts(productsData[3].products)
            setSelectedCategory(category)
        } else if (category.id == 5) {
            setProducts(productsData[4].products)
            setSelectedCategory(category)
        }
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
            <Button onPress={() => navigation.navigate("Login")} title='Logout' />
            <MainCategories
                categories={productsData}
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
            />
            <ProductsList
                currentLocation={currentLocation}
                products={products}
                navigation={navigation}
            />
        </SafeAreaView>
        );
    };


export default Home;
