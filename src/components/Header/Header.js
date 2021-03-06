import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { icons, SIZES, COLORS, FONTS } from '../../constants';

const Header = (props) => {
    const { title, clickHandlerLeft, clickHandlerRight, iconLeft, iconRight } = props;
    return (
        <View style={{ flexDirection: 'row', height: 50 }}>
            <TouchableOpacity style={{ width: 50, paddingLeft: SIZES.padding * 2, justifyContent: 'center' }} onPress={clickHandlerLeft}>
                <Image
                    source={iconLeft}
                    resizeMode='contain'
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ widht: '70%', height: '100%', backgroundColor: COLORS.lightGray3, alignItems: 'center', justifyContent: 'center', borderRadius: SIZES.radius }}>
                    <Text style={{ fontSize: 22 }}>{title}</Text>
                </View>
            </View>
            <TouchableOpacity style={{ width: 50, paddingRight: SIZES.padding, justifyContent: 'center' }} onPress={clickHandlerRight}>
                <Image
                    source={iconRight}
                    resizeMode='contain'
                    style={{ height: 30, width: 30 }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header;