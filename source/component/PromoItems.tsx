import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import PromoItemsSub from './PromoItemsSub'

const PromoItems = () => {
    return (
        <View style={{ marginHorizontal: 18, width: '100%', flexWrap: 'wrap', flexDirection: 'row' }}>
            <PromoItemsSub
                image={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teakpalace.com%2Fblog%2Faneka-makanan-indonesia-yang-paling-enak-di-dunia&psig=AOvVaw0xe7_2caeeCLi9OZl9qpaN&ust=1701438549645000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjIvtfu64IDFQAAAAAdAAAAABAJhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fflip.id%2Fblog%2Fmakanan-khas-malaysia&psig=AOvVaw0xe7_2caeeCLi9OZl9qpaN&ust=1701438549645000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjIvtfu64IDFQAAAAAdAAAAABAE' }}
                text='makanan madura enak'
            />

        </View>
    )
}

export default PromoItems