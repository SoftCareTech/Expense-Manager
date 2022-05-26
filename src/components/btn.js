import colors from "./colors"

import React from "react"
import { Pressable, TouchableOpacity, StyleSheet, Text } from "react-native"
export const BtnDefault = ({ title, onPress, style }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.button, style]}>
                {title}
            </Text>
        </TouchableOpacity>
    )

}
export const BtnText = ({ title, onPress, style }) => {
    return (<>
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.buttonText, style]}>
                {title}
            </Text>
        </TouchableOpacity>
    </>)

}

const styles = StyleSheet.create({

    button: {
        padding: 8,
        backgroundColor: colors.primary,
        color: colors.white,
        borderRadius: 5,
        textAlign: "center",
        fontSize: 25,
        fontWeight: '700',
        color: colors.white,
        backgroundColor: colors.black,
        margin: 8,

        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .3,
        shadowRadius: 8,
        elevation: 5,


    },
    buttonText: {
        color: colors.black,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Roboto",


    },
    buttonPositive: {
        padding: 8,
        backgroundColor: colors.primary,
        color: colors.white,
        borderWidth: 1,
        borderColor: colors.white
        , borderRadius: 25,
        fontWeight: "bold",
        fontSize: 20,
        minWidth: 100,
        textAlign: "center",
        margin: 8,

        shadowColor: 'red',
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonPositiveDisable: {
        padding: 8,
        backgroundColor: colors.primary,
        color: colors.white,
        borderWidth: 1,
        borderColor: colors.white
        , borderRadius: 25,
        fontWeight: "bold",
        fontSize: 20,
        minWidth: 100,
        textAlign: "center",
        margin: 8,
        opacity: 0.5,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonNegative: {
        margin: 8,
        padding: 8,
        backgroundColor: colors.white,
        color: colors.primary,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: colors.primary,
        fontWeight: "bold",
        fontSize: 20
        , minWidth: 100,
        textAlign: "center",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 8,
        elevation: 5,
    },

})





