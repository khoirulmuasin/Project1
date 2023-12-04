import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from '../../page/Home';

const MaterialBotton = createMaterialBottomTabNavigator();

export default class index extends Component {
    render() {
        return (
            <NavigationContainer>
                <MaterialBotton.Navigator>
                    <MaterialBotton.Screen name='Home' component={Home} />
                </MaterialBotton.Navigator>
            </NavigationContainer>
        )
    }
}
