import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { initialCurrentLocation, productsCategories } from '../../assets/data';
import { Header } from '../../components';
import { icons } from '../../constants';
import { fetchData } from '../../helpers/fetchData';
import { MainCategories, ProductsList } from './components';
import { styles } from './HomeStyles';

const Home = ({ navigation }) => {

    const productsData = fetchData('products');
    const newProductsData = fetchData('products/new');
    const [categories, setCategories] = useState(productsCategories);
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [products, setProducts] = useState();
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);

    useEffect(() => {
        setProducts(newProductsData)
    }, [newProductsData])

    const onSelectCategory = (category) => {
        if (category.id == 1) {
            setProducts(newProductsData[0].products)
            setSelectedCategory(category)
        } else {
            let productsList = newProductsData.filter(a => a.category.includes(category.id))
            setProducts(productsList)
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
            <MainCategories
                categories={newProductsData}
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
            />
            <ProductsList
                currentLocation={currentLocation}
                products={products}
                categories={newProductsData}
                navigation={navigation}
            />
        </SafeAreaView>
        );
    };


export default Home;
