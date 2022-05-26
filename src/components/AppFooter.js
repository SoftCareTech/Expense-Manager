

import React, { useState } from "react";
import { createElement } from 'react-native-web';
import {
    StyleSheet, View, Text, TextInput,
    Dimensions, TouchableOpacity, Button, Linking, Alert, ScrollView
} from "react-native";

const AppFooter = () =>
    <View style={styles.footer}>
        <View style={styles.footerItem}>
            <Text style={styles.text}>Fork me </Text>

            <TouchableOpacity onPress={async () => {
                const url = "https://github.com/SoftCareTech"
                const supported = await Linking.canOpenURL(url);
                if (supported) {
                    await Linking.openURL(url);
                } else {
                    Alert.alert(`Don't know how to open this URL: ${url}`);
                }
            }}>
                <Text style={styles.textFocus}>on Github</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.footerItem}>
            <Text style={styles.text}>Build with </Text>
            <TouchableOpacity onPress={async () => {
                const url = "https://expo.dev/"
                const supported = await Linking.canOpenURL(url);
                if (supported) {
                    await Linking.openURL(url);
                } else {
                    Alert.alert(`Don't know how to open this URL: ${url}`);
                }
            }}>
                <Text style={styles.textFocus}>React natve</Text>
            </TouchableOpacity>
        </View>
    </View>






const styles = StyleSheet.create({
    container_: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: "#f3f5f7",
        alignItems: 'center',
        paddingHorizontal: 8
        , justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        backgroundColor: "#f3f5f7",
        alignItems: "flex-start",
        paddingHorizontal: 8
        , width: Dimensions.get('window').width,
        justifyContent: 'flex-start'
    },
    btn: {
        backgroundColor: "#233348",
        color: "#2a7fef",
    }
    ,

    footer: {
        flex: -1,
        width: Dimensions.get('window').width,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: "#36485f",
        justifyContent: "space-between"
    },



    footerItem: {
        flex: -1,
        flexDirection: "row",
        alignItems: 'center'
        , padding: 8
    }
    , btn: {
        backgroundColor: "#233348",
        color: "#2a7fef",
    }
    ,



});
export default AppFooter