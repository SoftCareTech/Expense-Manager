
import React, { useState } from "react";
import { createElement } from 'react-native-web';
import {
    StyleSheet, View, Text, TextInput,
    Dimensions, TouchableOpacity, Button, Linking, Alert, ScrollView
} from "react-native";
import { BtnDefault, BtnText } from "../components/btn";

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Checkbox from 'expo-checkbox';
import { Dropdown } from 'react-native-element-dropdown';
import { useFocusEffect } from '@react-navigation/native';

///icon 
import { MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { getData } from "../databaseR";
import AddExpense from "./AddExpense";

const ExpenseScreen = ({ navigation }) => {
    const DateTimePicker = ({ value, onChange, style }) => {
        return createElement('input', {
            type: 'date',
            value: value,
            onInput: onChange,
            className: style,
        })
    }












    const FilterPan = () => {
        return (<View style={styles.panItem}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'flex-end',

            }}>
                <Text style={styles.filterLabels}>Filter Expenses</Text>
                <BtnText style={styles.btn} title={"Clear Filter"} onPress={() => {

                    setStartF("")
                    setEndF("")
                    setMinF('')
                    setMaxF('')
                    setMerchantF("")
                    setSort({ index: 0, click: 0 })
                    setIsNew(true)
                    setIsProgress(true)
                    setIsReimbursed(true)
                }} />

            </View>
            <View style={styles.lineH} />
            <Text style={styles.filterLabels}>From</Text>
            <DateTimePicker value={startF}
                onChange={(v) => setStartF(v)}
                style={styles.filterInput} />
            <Text style={styles.filterLabels}>To</Text>
            <DateTimePicker value={endF}
                onChange={(v) => {
                    console.log(v)
                    setEndF(v)
                }}
                style={styles.filterInput} />
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.filterLabels}>Min</Text>
                    <TextInput value={minF}
                        key={"minF"}
                        onChangeText={(v) => setMinF(v)}
                        keyboardType="numeric"
                        style={styles.filterInput} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.filterLabels}>Max</Text>
                    <TextInput value={maxF}
                        onChangeText={(v) => setMaxF(v)}
                        keyboardType="numeric"
                        style={styles.filterInput} />
                </View>
            </View>
            <Text style={styles.filterLabels}>Merchant</Text>
            <Dropdown
                style={styles.filterInput}
                data={merchantList}
                maxHeight={250}
                labelField="name"
                valueField="name"
                value={merchantF}
                placeholder={""}
                onChange={item => {
                    setMerchantF(item.name);
                }}
            />
            <Text style={styles.filterLabels}>Status</Text>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.headItem}>
                    <Text  >New</Text>
                    <Checkbox value={isNew}
                        onValueChange={
                            (value) => {
                                setIsNew(value)
                            }} />
                </View>

                <View style={styles.headItem}>
                    <Text  >In Progress</Text>
                    <Checkbox value={isProgress}
                        onValueChange={
                            (value) => {
                                setIsProgress(value)
                            }} />
                </View>
                <View style={styles.headItem}>
                    <Text  >Reimbursed</Text>
                    <Checkbox value={isReimbursed}
                        onValueChange={
                            (value) => {
                                setIsReimbursed(value)
                            }} />
                </View>
            </View>

        </View>)
    }

    const add = () =>
        <TouchableOpacity onPress={() => { setAddPop(true) }}>
            <Ionicons style={{ flex: -1, position: 'absolute', bottom: 20, right: 20 }}
                name="add-circle-sharp" size={50} color="#ff4238" />
        </TouchableOpacity>





















    const DataPan = () => {

        const tableHead = [
            "Date",
            "Merchant",
            "Total",
            "Status",
            "Comment"
        ]
        let sorted = data.filter((v, i, a) => {
            if (startF != "") {
                filterCount++

                if (v.date < startF) return false
            }
            if (endF != "") {
                filterCount++
                if (v.date > endF) return false
            }
            if (maxF != "") {
                filterCount++
                if (v.total > maxF) return false
            }
            if (minF != "") {
                filterCount++
                if (v.total < minF) return false
            }
            if (merchantF != "") {
                filterCount++
                if (v.merchant !== merchantF) return false
            }
            if (!isProgress) {
                filterCount++
                if (v.status === "Is Progress") return false
            }
            if (!isNew) {
                filterCount++
                if (v.status === "New") return false
            }
            if (!isReimbursed) {
                filterCount++
                if (v.status === "Reimbursed") return false
            }

            return true
        })


        // sorted= sorted. 
        if (sort.click == 1) {
            switch (sort.index) {
                case 0: {
                    sorted.sort((a, b) => (a.date > b.date) ? 1 :
                        ((b.date > a.date) ? -1 : 0)); break;
                }
                case 1: {
                    sorted.sort((a, b) => (a.merchant > b.merchant) ? 1 :
                        ((b.merchant > a.merchant) ? -1 : 0)); break;
                }
                case 2: {
                    sorted.sort((a, b) => (a.total > b.total) ? 1 :
                        ((b.total > a.total) ? -1 : 0)); break;
                }
                case 3: {
                    sorted.sort((a, b) => (a.status > b.status) ? 1 :
                        ((b.status > a.status) ? -1 : 0)); break;
                }
                case 4: {
                    sorted.sort((a, b) => (a.comment > b.comment) ? 1 :
                        ((b.comment > a.comment) ? -1 : 0)); break;
                }
            }
        }
        else if (sort.click == 2) {
            switch (sort.index) {
                case 0: {
                    sorted.sort((a, b) => (a.date < b.date) ? 1 :
                        ((b.date < a.date) ? -1 : 0)); break;
                }
                case 1: {
                    sorted.sort((a, b) => (a.merchant < b.merchant) ? 1 :
                        ((b.merchant < a.merchant) ? -1 : 0)); break;
                }
                case 2: {
                    sorted.sort((a, b) => (a.total < b.total) ? 1 :
                        ((b.total < a.total) ? -1 : 0)); break;
                }
                case 3: {
                    sorted.sort((a, b) => (a.status < b.status) ? 1 :
                        ((b.status < a.status) ? -1 : 0)); break;
                }
                case 4: {
                    sorted.sort((a, b) => (a.comment < b.status) ? 1 :
                        ((b.comment < a.comment) ? -1 : 0)); break;
                }
            }
        }
        const tableData = sorted.map((d, i) => [i + " " + d.date, d.merchant, "$" + d.total,
        d.status, d.comment])
        const widthAtt = [100, 100, 100, 100, 220]
        const rowClicked = (index, data) => {
            console.log(`This is row ${index}`);

        }
        const titleClicked = (index) => {
            console.log(`This is title ${index}`);
            if (sort.index === index) {
                if (sort.click < 2)
                    setSort({ index: index, click: sort.click + 1 })
                else setSort({ index: index, click: 0 })
            }
            else setSort({ index: index, click: 1 })
        }

        return (<View style={[styles.panItem, {
            flex: 2, backgroundColor: "white",

        }]}>

            <ScrollView horizontal={true}>


                <View>
                    <Table borderStyle={{ borderWidth: 0, borderColor: '#C1C0B9' }}>
                        <TableWrapper style={{
                            flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: "#dde2e8", height: 50
                        }}>
                            {tableHead.map((title, col) => (
                                <Cell key={col}
                                    width={widthAtt[col]}
                                    data={
                                        <TouchableOpacity onPress={() =>
                                            titleClicked(col)}>
                                            {sort.index !== col || sort.click === 0 ?
                                                <View style={styles.headItem} >
                                                    <Text style={styles.titleData}>{title}</Text>
                                                    <FontAwesome style={{ opacity: 0.1 }} name="unsorted" size={18} color="black" />
                                                </View> : null}

                                            {sort.index === col && sort.click == 1 ?
                                                <View style={styles.headItem}>
                                                    <Text style={[styles.titleData, { color: "#2a7fef" }]}>{title}</Text>
                                                    <FontAwesome name="sort-down" size={18} color="#2a7fef" />
                                                </View> : null}

                                            {sort.index === col && sort.click == 2 ?
                                                <View style={styles.headItem}>
                                                    <Text style={[styles.titleData, , { color: "#2a7fef" }]}>{title}</Text>
                                                    <FontAwesome name="sort-asc" size={18} color="#2a7fef" />
                                                </View> : null}
                                        </TouchableOpacity>} />
                            ))}
                        </TableWrapper>
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            {
                                tableData.map((rowData, index) => (
                                    <TableWrapper widthArr={widthAtt}
                                        style={[{ flexDirection: "row", height: 40, backgroundColor: '#E7E6E1' },
                                        index % 2 && { backgroundColor: '#F7F6E7' }]}  >
                                        {rowData.map((d, i) => (<Cell
                                            width={widthAtt[i]}
                                            key={i} data={d}
                                            textStyle={{ textAlign: 'center', fontWeight: '100' }} />

                                        ))}
                                    </TableWrapper>
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>





                <View>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={tableHead} style={{ height: 50, backgroundColor: '#537791' }}
                            textStyle={{ textAlign: 'center', fontWeight: '100' }}
                            widthArr={widthAtt}
                        />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            {
                                tableData.map((rowData, index) => (
                                    <TableWrapper widthArr={widthAtt}
                                        style={[{ flexDirection: "row", height: 40, backgroundColor: '#E7E6E1' },
                                        index % 2 && { backgroundColor: '#F7F6E7' }]}  >
                                        {rowData.map((d, i) => (<Cell
                                            width={widthAtt[i]}
                                            key={i} data={d}
                                            textStyle={{ textAlign: 'center', fontWeight: '100' }} />

                                        ))}
                                    </TableWrapper>
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>




            {Dimensions.get('window').width >= 700 ? add() : null}
        </View>)
    }














    const merchantList = [{ name: "Rental car" }, { name: "Fast food" },
    { name: "Restaurant" }, { name: "Ride sharing" },
    { name: "Airline" }, { name: "Taxi" },
    { name: "Breakfast" }, { name: "Parking" },
    { name: "Shuttle" }, { name: "Electronics" },
    { name: "Office supplies" }, { name: "Hotel" },
    ]

    const [data, setData] = useState([])
    useFocusEffect(
        React.useCallback(() => {
            const load = async () => {
                try {
                    const data = await getData()
                    setData(data)
                } catch (e) {
                    console.log("Error", e)
                }

            }
            load();
        }, [])
    );




    const [addPop, setAddPop] = useState(false)
    const [showFilter, SetShowFilter] = useState(Dimensions.get('window').width > 700)
    const [startF, setStartF] = useState("")
    const [endF, setEndF] = useState("")
    const [minF, setMinF] = useState('')
    const [maxF, setMaxF] = useState('')
    const [merchantF, setMerchantF] = useState("")
    const [sort, setSort] = useState({ index: 0, click: 0 })
    const [isNew, setIsNew] = useState(true)
    const [isProgress, setIsProgress] = useState(true)
    const [isReimbursed, setIsReimbursed] = useState(true)
    const reimbursed = data.map(d => d.total).reduce((prev, curr) => prev + curr, 0)
    let filterCount = 0




    return (
        <View style={styles.container_}>

            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.title}>Expense Manager</Text>

                    <View style={{ flexDirection: 'row', alignContent: "flex-end", }}>
                        <BtnDefault title={"Profile"} style={styles.btnHead}
                            onPress={() => navigation.replace('Profile')} />
                        <BtnDefault style={styles.btnHead}
                            title={"Logout"} onPress={() => navigation.goBack()} />
                    </View>
                </View>
                <View style={{ width: Dimensions.get('window').width - 32, }}>{Dimensions.get('window').width < 700 ? <View style={[styles.panItem, {
                    flexDirection: "row", justifyContent: "space-between"
                }]}>
                    <View style={styles.text}>
                        <Text  >To be reimbursed</Text>
                        <Text>
                            ${reimbursed}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        SetShowFilter(!showFilter)
                    }}>
                        <View style={[styles.headItem, { alignContent: "center" }]}>
                            <Text style={{ color: "#2a7fef" }} >Filter {filterCount == 0 ?
                                null : filterCount}</Text>
                            <MaterialCommunityIcons name="filter-variant" size={24}
                                color="#2a7fef" />
                        </View>
                    </TouchableOpacity>



                </View> : null

                }</View>

                <View style={styles.pan}>
                    {showFilter ? FilterPan() : null}
                    {DataPan()}
                    {Dimensions.get('window').width > 700 ?
                        <View style={styles.panItem}>
                            <Text style={[styles.borderBottomS, styles.text]}>To be reimbursed</Text>
                            <Text style={{ color: '#ff4238', fontSize: 50, margin: 80 }}>
                                ${reimbursed}
                            </Text>
                        </View> : null

                    }
                </View>
            </View>

            {Dimensions.get('window').width < 700 ? add() : null}

            <AddExpense visibility={addPop} changeVisibility={() => {
                setAddPop(!addPop)
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container_: {
        flex: 1,
        width: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
        backgroundColor: "#f3f5f7",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        backgroundColor: "#f3f5f7",
        flex: 1,
        minHeight: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'flex-start'
    },
    lineH: {
        paddingHorizontal: 8,
        flex: -1,
        height: 2,
        flexDirection: "row",
        backgroundColor: "#dde2e8"
    },

    title: {
        fontSize: 25,
        color: "white"

    }

    , text: {
        fontSize: 18,
        color: "black"

    },

    panItem: {
        marginVertical: Dimensions.get('window').width < 700 ? 32 : 8,
        marginHorizontal: Dimensions.get('window').width < 700 ? 8 : 16,
        flex: Dimensions.get('window').width < 700 ? -1 : 1,

    },
    pan: {
        flexDirection: Dimensions.get('window').width < 700 ? "column" : "row",
        flex: 1,




    },
    filterInput: {
        fontSize: 20,
        backgroundColor: "#dde2e8"
        , marginHorizontal: 8,
    },
    filterLabels: {
        fontSize: 20
        , marginHorizontal: 8

    },


    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-end",
        backgroundColor: "#233348",
        width: Dimensions.get('window').width,
        paddingHorizontal: 32
    },
    btnHead: {
        backgroundColor: "#233348",
        color: "#2a7fef",
        fontSize: 20,
        paddingHorizontal: 4
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
    , btn: {
        fontSize: 18,
        color: "#2a7fef",
    }
    ,

    headItem: {
        flex: 1,
        minWidth: 100,
        flexDirection: "row",
        height: 50,
        marginHorizontal: 4,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    titleData: {
        color: 'black',
        fontSize: 18,
        paddingRight: 4,
        justifyContent: "flex-start"
        , alignContent: "flex-start"
        , alignSelf: "flex-start",
        alignItems: "flex-start"
    },
    textData: {
        flex: 1,
        textAlign: 'left',
        padding: 2, fontSize: 18
        , margin: 2,
    },
    borderBottomS: {
        borderBottomWidth: 2,
        borderBottomColor: "#dde2e8"
    }


});


export default ExpenseScreen