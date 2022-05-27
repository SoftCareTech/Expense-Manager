import React, { useState } from "react";
import {
    StyleSheet, View, Text,
    Dimensions, Modal
} from "react-native";
import { BtnText, } from "../components/btn";

const TextX = ({ title, children }) => {

    return <View>
        <Text style={styles.textXT} >{title}</Text>
        <View style={styles.textXC}>
            {children}
        </View>
    </View>

}


const styles = StyleSheet.create({


    textXC: {
        flex: 1,
        padding: 16,
        color: "white"
        , width: Dimensions.get('window').width - 32,
        backgroundColor: "#36485f",
        borderRadius: 10,
        marginTop: 8,
        marginHorizontal: 16,
        marginBottom: 16,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .3,
        shadowRadius: 8,
        elevation: 5,


    },
    textXT: {
        color: "white",
        fontSize: 25,
        marginHorizontal: 16,

    },

});


export default TextX