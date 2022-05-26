
import React, { useState } from "react";
import {
    StyleSheet, View, Text, TextInput,
    Dimensions, TouchableOpacity, Button, Linking, Image, ScrollView,
} from "react-native";
import { BtnDefault, BtnText } from "../components/btn";
const TextX = ({ title, children }) => {

    return <View>
        <Text style={styles.textXT} >{title}</Text>
        <View style={styles.textXC}>
            {children}
        </View>
    </View>

}

import imgSrc from '../../assets/RaphProfile.png'
const ProfileScreen = ({ navigation }) => {

    return (
        <View style={styles.container_}>
            <View style={styles.container}>
                <Text style={styles.title}>Expense Manager</Text>
                <View style={styles.header}>
                    <View style={styles.imgContainer}>

                        <Image
                            style={styles.img}
                            source={{ uri: imgSrc }} />
                        <View style={{
                            flexDirection: "row",
                            alignContent: "center", justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={styles.textB}>Gbenge A Raphael</Text>
                            <BtnText style={styles.editBtn}
                                title={"Edit"} onPress={() => {

                                }} />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <BtnDefault title={"Expense"} style={styles.btn}
                            onPress={() => navigation.replace('Expense')} />
                        <BtnDefault style={styles.btn}
                            title={"Logout"} onPress={() => navigation.goBack()} />
                    </View>
                </View>


                <View style={styles.lineH} />



                <ScrollView style={{ margin: 16 }}>
                    <TextX title={"Job description"}>
                        <Text style={styles.textB}>Mobile Engineer -- Android = java/kotlin/ and react-native./</Text></TextX>
                    <TextX title={"Location"}>
                        <Text style={styles.textB}>Nigeria-Benue state</Text></TextX>
                    <TextX title={"Department"}>
                        <Text style={styles.textB}>Engineering</Text></TextX>

                </ScrollView>





            </View>
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
        </View >


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#233348",
        alignItems: 'center',
        paddingHorizontal: 8
        , justifyContent: 'center'
    },
    container_: {
        flex: 1,
        backgroundColor: "#233348",
        alignItems: 'center',
        paddingHorizontal: 8
        , justifyContent: 'space-between'
    },
    title: {
        fontSize: 30,
        color: "white"

    }
    ,
    btn: {
        backgroundColor: "#233348", color: '#2a7fef',
        margin: 0
    },
    editBtn: {
        backgroundColor: "#36485f", color: '#2a7fef',
        margin: 0, alignItems: 'flex-end', alignContent: "flex-end",
        paddingLeft: 4, justifyContent: 'center'
    },
    input: {
        color: "white",
        backgroundColor: "#36485f",
        flex: 1,
        height: 40,
        fontSize: 25

    },
    textFocus: {
        marginTop: 16,
        color: "#2a7fef",
    },
    text: {
        color: "white",
        marginTop: 16

    },
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
    textB: {
        color: "#F5F5F5",
        opacity: 0.9,
        fontSize: 20

    },


    lineH: {
        height: 5
        , width: Dimensions.get('window').width,
        backgroundColor: "#26599c"
    },

    imgContainer: {
        backgroundColor: "#36485f",
        borderRadius: 10,
        margin: 16,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .3,
        shadowRadius: 8,
        elevation: 5,
        flexDirection: "column",
        padding: 32
        , alignItems: "center"


    },
    img: {
        height: 100, borderRadius: 100,
        width: 100,

    },
    header: {
        flexDirection: Dimensions.get('window').width > 700 ? 'row' : "column",
        justifyContent: "space-between",
        alignItems: Dimensions.get('window').width > 700 ? "flex-end" : "center",
        width: Dimensions.get('window').width - 32,
    },


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



});


export default ProfileScreen