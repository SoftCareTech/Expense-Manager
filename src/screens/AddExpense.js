import React, { useState, useContext } from "react";;
import { Alert, Modal, Image, Dimensions, StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { BtnDefault, BtnText } from "../components/btn";

import imgSrc from '../../assets/RaphProfile.png'
import * as DocumentPicker from 'expo-document-picker';
const AddExpense = ({ visibility, changeVisibility, onResult,
    data = { total: 0 } }) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibility}
                onRequestClose={() => {
                    changeVisibility()
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <View style={{
                                flex: 1,
                                flexDirection: Dimensions.get("screen").width < 700 ? "column" : "row",

                            }}>
                                <View style={{ marginRight: 32 }}>
                                    <Text style={styles.title} >Add Expense</Text>
                                    <Text style={styles.label}> Merchant</Text>
                                    <Dropdown style={styles.input} />
                                    <Text style={styles.label}> Total</Text>
                                    <TextInput style={styles.input} />
                                    <Text style={styles.label}> comment</Text>
                                    <TextInput />
                                </View>
                                <View style={{ borderColor: "black", borderWidth: 2, borderStyle: "dashed" }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <BtnText
                                            onPress={async () => {
                                                const result = await DocumentPicker.getDocumentAsync()
                                                //     setR({ ...data, imageUri: result.uri })

                                            }}
                                            style={{
                                                fontSize: 25,
                                                backgroundColor: "white",
                                                color: "blue"
                                            }} title={"Select reciept"} />
                                        <Text> Drop reciept here</Text>
                                    </View>
                                    <Image
                                        style={styles.img}
                                        source={{ uri: data.imageUri ? data.imageUri : imgSrc }} />
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <BtnDefault onPress={() => {
                                    changeVisibility()
                                }} style={{
                                    backgroundColor: "blue",
                                    color: "white",
                                    fontSize: 25
                                }} title={"Save"} />

                                <BtnText onPress={() => {
                                    changeVisibility()
                                }} style={{
                                    backgroundColor: "white",
                                    color: "blue",
                                    fontSize: 25
                                }} title={"Cancel"} />

                                <View style={{ flex: 1, alignItems: "flex-end" }}>
                                    <BtnText onPress={() => {
                                        changeVisibility()
                                    }} style={{
                                        fontSize: 25,
                                        backgroundColor: "white",
                                        color: "red"
                                    }} title={"Delete"} /></View>
                            </View>
                        </View>



                    </View>
                </View>
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    backgroundSvg: {

        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,

    },
    container: {
        flex: -1,
        alignItems: 'flex-start',
        padding: 16,
        flexDirection: 'column'
        , justifyContent: 'space-between'

        , paddingBottom: 50
    },

    titleContainer: {
        flex: -1,
        width: Dimensions.get('window').width - 16,
        alignItems: 'center',
        flexDirection: 'row'
        , justifyContent: 'flex-start'

    },
    title: {
        fontWeight: "bold"
        , fontSize: 30,
        color: "black",
    },
    backSvg: {
        flex: 1,
        paddingRight: 16,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'

    },

    input: {
        fontSize: 20,
        backgroundColor: "#dde2e8"
        , marginHorizontal: 8,
    },
    label: {
        fontSize: 20
        , marginHorizontal: 8

    },








    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: Dimensions.get('window').width - 100,
        margin: 20,
        maxWidth: 800,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }




});


export default AddExpense