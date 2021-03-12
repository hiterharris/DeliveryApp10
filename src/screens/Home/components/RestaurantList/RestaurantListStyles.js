import { StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../../../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
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
        height: 200,
        borderRadius: SIZES.radius
    },
    itemDuration: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: SIZES.width * 0.3,
        backgroundColor: COLORS.white,
        borderTopRightRadius: SIZES.radius,
        borderBottomLeftRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    rating: {
        height: 20,
        width: 20,
        tintColor: COLORS.primary,
        marginRight: 10,
        marginTop: -2,
    }
})