import React, { useState } from "react";
import {
    StyleSheet, View, Text,
    Dimensions, Modal, TextInput, ScrollView, Image
} from "react-native";
import { BtnText, BtnDefault } from "./btn";
import colors from "./colors";
import TextX from "./TextX";

import imgSrc from '../../assets/RaphProfile.png'
import * as DocumentPicker from 'expo-document-picker';
const EditProfile = ({ show, onResult = (b) => { console.error("Pls listen to confirm") },
    message = "Default confirm message... put in fuction call or props" }) => {
    const [visibility, setVisibility] = useState(false)
    const [data, setData] = useState({
        name: "", imageUri: null
        , location: "", department: "", ref: null
    })

    show.current = (d) => {
        setData(d)
        setVisibility(true)
    }
    message = data.msg ? data.msg : message
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visibility}
                onRequestClose={() => setVisibility(!visibility)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.container}>
                            <Text style={styles.title}>Edit Profile</Text>
                            <ScrollView>
                                <TextX title={"Name"}>
                                    <TextInput value={data.name} onChangeText={(t) => {
                                        setData({ ...data, name: t })
                                    }} style={styles.input} /> </TextX>
                                <TextX title={"Job description"}>
                                    <TextInput value={data.description} onChangeText={(t) => {
                                        setData({ ...data, description: t })
                                    }} style={styles.input} /> </TextX>
                                <TextX title={"Location"}>
                                    <TextInput value={data.location} onChangeText={(t) => {
                                        setData({ ...data, location: t })
                                    }} style={styles.input} /> </TextX>
                                <TextX title={"Department"}>
                                    <TextInput value={data.department} onChangeText={(t) => {
                                        setData({ ...data, department: t })
                                    }} style={styles.input} /> </TextX>
                                <TextX title={"Profile picture"}>
                                    <><BtnText title={"select image"} onPress={async () => {
                                        const result = await DocumentPicker.getDocumentAsync()
                                        setData({ ...data, imageUri: result.uri })

                                    }} style={{ color: '#2a7fef' }} />
                                        <Image
                                            style={styles.img}
                                            source={{ uri: data.imageUri ? data.imageUri : imgSrc }} /> </>   </TextX>


                            </ScrollView>
                            <View style={{
                                width: Dimensions.get('window').width, alignContent: "center", alignItems: 'center',
                                flexDirection: 'row', justifyContent: "space-around"
                            }}>
                                <BtnText title={"Cancel"} style={styles.btn} onPress={() => {
                                    setVisibility(!visibility)
                                }} />
                                <BtnDefault title={"Submit"} style={styles.btn} onPress={() => {
                                    onResult(data)
                                    setVisibility(!visibility)
                                }} />
                            </View>




                        </View>
                    </View>
                </View>
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#233348",
        alignItems: 'center',
        justifyContent: 'space-around'
        , paddingHorizontal: 8
    },




    title: {
        fontSize: 30,
        color: "white"

    }
    ,
    btn: {
        backgroundColor: "#233348", color: '#2a7fef',
        margin: 0,
        fontSize: 25,
        backgroundColor: "#36485f",
        paddingHorizontal: 16, paddingVertical: 8
        , marginBottom: 16
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


    input: {
        color: "#F5F5F5",
        opacity: 0.9,
        fontSize: 20,
        height: 50
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },





});


export default EditProfile