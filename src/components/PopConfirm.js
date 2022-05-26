import React, { useState } from "react";
import {
    StyleSheet, View, Text,
    Dimensions, Modal
} from "react-native";
import { BtnText, } from "../components/btn";
import colors from "../components/colors";
const PopConfirm = ({ show, onResult = (b) => { console.error("Pls listen to confirm") },
    message = "Default confirm message... put in fuction call or props" }) => {
    const [visibility, setVisibility] = useState(false)
    const [data, setData] = useState({ msg: null, ref: null })

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

                            <View style={styles.container}>
                                <Text style={styles.text}>{message}</Text>
                                <View style={styles.containerBtn}>
                                    <BtnText title={"No"} onPress={() => {
                                        onResult(false, data.ref)
                                        setVisibility(!visibility)
                                    }} style={styles.btn} />
                                    <BtnText title={"Yes"} onPress={() => {
                                        onResult(true, data.ref)
                                        setVisibility(!visibility)
                                    }} style={styles.btn} />
                                </View>

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
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-around'
        , paddingHorizontal: 8
    },
    containerBtn: {
        flex: -1,
        width: Dimensions.get('window').width - 16,  // minus pading horizontal

        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    text: {
        color: colors.black,
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: 'bold',
        justifyContent: 'center'
        , textAlign: 'center'
    },
    btn: {
        color: colors.primary,
        fontSize: 25,
        fontFamily: "Roboto",
        fontWeight: 'bold'
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


export default PopConfirm