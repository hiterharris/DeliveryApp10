import { StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../../../../constants';

export const styles = StyleSheet.create({
    productCard: {
        width: '45%',
        margin: '2.5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    productCardImage: {
        marginBottom: SIZES.padding,
        backgroundColor: 'white'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    itemImage: {
        width: "100%",
        height: 150,
        borderRadius: SIZES.radius
    },
    addButton: {
        height: 30,
        margin: 10,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    addButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        textAlign: 'center'
    },
    name: {
        fontSize: 16,
        textAlign: 'center'
    },
    rating: {
        height: 20,
        width: 20,
        tintColor: COLORS.primary,
        marginRight: 10,
        marginTop: -2,
    }
})