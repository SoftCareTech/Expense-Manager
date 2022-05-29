<View>
    <Table borderStyle={{ borderWidth: 0 }}>
        <TableWrapper style={{
            flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: "#dde2e8"
        }}>

            {tableHead.map((title, col) => (
                <Cell key={col} data={
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

    <ScrollView >
        <View style={{ height: Dimensions.get("screen").height - 200, flexDirection: 'row' }}>
            <Table >
                {tableData.map((rowData, index) => (
                    <TableWrapper key={index} style={{ flexDirection: 'column', marginTop: 2, }}>
                        {
                            <Cell key={index} data={<TouchableOpacity key={index} onPress={() =>
                                rowClicked(index, rowData[0])}>
                                <Text style={styles.textData}>{rowData[0]}</Text>

                            </TouchableOpacity>} />
                        }
                    </TableWrapper>
                ))
                }
            </Table>
            <ScrollView horizontal>
                <Table >
                    {tableData.map((rowData, index) => (
                        <TableWrapper key={index}
                            style={{ flexDirection: 'row', marginTop: 2, }}>
                            {
                                rowData.map((e) => e.slice(1, e.length)).map((cellData, cellIndex) => (
                                    <Cell key={cellIndex} data={<TouchableOpacity key={cellIndex} onPress={() =>
                                        rowClicked(cellIndex, cellData)}>
                                        <Text style={styles.textData}>{cellData}</Text>


                                    </TouchableOpacity>} />

                                ))
                            }
                        </TableWrapper>
                    ))
                    }
                </Table>
            </ScrollView>

        </View>

    </ScrollView>


</View>
