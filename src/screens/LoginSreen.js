
import React, { useState } from "react";
import {
    StyleSheet, View, Text, TextInput,
    Dimensions, TouchableOpacity, Button, Linking
} from "react-native";
import { BtnDefault } from "../components/btn";

import { Ionicons } from '@expo/vector-icons';







const LoginScreen = ({ navigation }) => {
    const [sPassword, setSpassword] = useState(true)
    const [username, setUsername] = useState("Demo")
    const [password, setPassword] = useState('demo')
    const [inputF, setInputF] = useState([false, false])

    return (
        <View style={styles.container_}>
            <View style={styles.container}>
                <Text style={styles.title}>Expense Manager</Text>
                <View style={styles.lineH} />
                <View> <Text
                    style={inputF[0] ? styles.textFocus : styles.text}>Username</Text>


                    <TextInput
                        onFocus={() => setInputF([true, false])}
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input} />
                    <Text style={inputF[1] ? styles.textFocus : styles.text}>
                        Password</Text>
                    <View style={styles.sPassword}>
                        <TextInput
                            onFocus={() => setInputF([false, true])}
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={sPassword} />
                        <TouchableOpacity onPress={() => setSpassword(!sPassword)}>
                            <View    > {sPassword ? <Ionicons name="eye" size={24} color="black" />
                                : <Ionicons name="eye-off" size={24} color="black" />}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.loginCon}>
                        <BtnDefault
                            onPress={() => navigation.navigate('Profile')}
                            title={"Login"}
                            style={styles.login} /></View>
                </View>



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
    lineH: {
        height: 5
        , width: Dimensions.get('window').width,
        backgroundColor: "#26599c"
        , marginVertical: 30
    },
    loginCon: {
        alignItems: "flex-start", marginTop: 8
    },
    login: {
        backgroundColor: "#2a7fef",
        color: "white",
        paddingHorizontal: 16,
        paddingVertical: 8,
        fontSize: 25
        , color: "white",
        margin: 0


    }
    , sPassword: {
        flexDirection: "row"

    }
    , footer: {
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


export default LoginScreen