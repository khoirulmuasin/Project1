import React,{Component} from "react";
import { View, Text, Image, Dimensions, StyleSheet, StatusBar } from "react-native";
import imgBanner from './source/assets/images/awan.jpg'

const {heigh,width} = Dimensions.get("window")
const styles = StyleSheet.create({
    imageBanner: {
        height: 140, width: width,
    }
})
class Home extends Component{
    render() {
        return (
            <View>
                <StatusBar barStyle={"dark-content"} translucent backgroundColor='rgba(0,0,0,0)'/>
                <Image style={styles.imageBanner} source={imgBanner} />
            </View>
        )
    }
}

export default Home