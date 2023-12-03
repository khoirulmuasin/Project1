import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import PromoItemsSub from './PromoItemsSub';


const PromoItems = () => {
    return (
        <View style={{ marginHorizontal: 18, width: '100%', flexWrap: 'wrap', flexDirection: 'row' }}>
            <PromoItemsSub
                image={{ uri: "https://images.unsplash.com/photo-1612939675110-fe3a0129a024?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrYW5hbnxlbnwwfHwwfHx8MA%3D%3D" }}

                text="MEI Sedap"
                diskon="Diskon 40%"
            />
            <PromoItemsSub
                image={{ uri: "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2021/11/10-Makanan-Khas-Bandung.webp" }}

                text="Mei Madura Enak"
            />
            <PromoItemsSub
                image={{ uri: "https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg" }}
                text="Sate Madura Enak"
                diskon="Diskon 40%"
            />
            <PromoItemsSub
                image={{ uri: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=600&q=90" }}
                text="Nasi Goreng Enak"
                diskon="Diskon 40%"
            />


        </View>
    )
}

export default PromoItems