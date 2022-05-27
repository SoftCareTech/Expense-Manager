
import React, { useState, useCallback } from "react";
import EditProfile from "../components/EditProfile";
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
import { useFocusEffect } from '@react-navigation/native';
import imgSrc from '../../assets/RaphProfile.png'
import * as DocumentPicker from 'expo-document-picker';
import { db } from "../databaseR";
import AppFooter from "../components/AppFooter";
const ProfileScreen = ({ navigation }) => {

    const show = React.useRef(null)
    const [data, setData] = useState({
        name: "Gbenge A Raphael",
        imageUri: null
        , location: "Nigeria Benue state",
        department: "Engineering",
        description: "Mobile Engineer -- Android = java/kotlin/ and react-native./"
    })



    useFocusEffect(
        React.useCallback(() => {
            const load = async () => {
                try {
                    const r = await db.findAsync({ _id: "_profile" })
                    if (r) if (r[0]) setData(r[0])

                } catch (e) {

                }

            }
            load();
        }, [])
    );




    return (
        <View style={styles.container_}>

            <View style={styles.container}>
                <Text style={styles.title}>Expense Manager</Text>

                <View style={styles.header}>
                    <View style={styles.imgContainer}>

                        <Image
                            style={styles.img}
                            source={{ uri: data.imageUri ? data.imageUri : imgSrc }} />
                        <View style={{
                            flexDirection: "row",
                            alignContent: "center", justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={styles.textB}>{data.name}</Text>
                            <BtnText style={styles.editBtn}
                                title={"Edit"} onPress={async () => {
                                    show.current(data)

                                }} />
                        </View>
                        <EditProfile show={show} onResult={async (data) => {

                            if (data) try {

                                const r = await db.updateAsync({
                                    _id: "_profile"
                                }, { $set: data }, { upsert: true });
                                console.log(r, data)
                            } catch (e) {
                                console.log("Error", e)
                            }
                        }} />
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
                        <Text style={styles.textB}>{data.description}</Text></TextX>
                    <TextX title={"Location"}>
                        <Text style={styles.textB}>{data.location}</Text></TextX>
                    <TextX title={"Department"}>
                        <Text style={styles.textB}>{data.location}</Text></TextX>

                </ScrollView>





            </View>
            <AppFooter />

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

    input: {
        color: "#F5F5F5",
        opacity: 0.9,
        fontSize: 20,
        height: 50
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




});


export default ProfileScreen