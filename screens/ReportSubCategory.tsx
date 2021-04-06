import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Pressable, Modal, TextInput } from 'react-native';

const ACTIVITIES_DATA = [{
    id: '11',
    title: 'מפגשים',
},
{
    id: '12',
    title: 'מפגשים ליד שולחן',
},
{
    id: '13',
    title: 'משחק במרחב',
},
{
    id: '14',
    title: 'חצר / ג׳ימבורי',
},
{
    id: '15',
    title: 'פעילות יצירה',
},
{
    id: '16',
    title: 'מיומנויות מחיי היומיום',
},
];

const MEALS_DATA = [{
    id: '21',
    title: 'ארוחת בוקר',
},
{
    id: '22',
    title: 'ארוחת פרי',
},
{
    id: '23',
    title: 'ארוחת צהריים',
},
{
    id: '24',
    title: 'ארוחת מנחה',
}
];

const REQUEST_DATA = [{
    id: '31',
    title: 'סדין למיטה',
},
{
    id: '32',
    title: 'בגדי החלפה',
},
{
    id: '33',
    title: 'טיטולים',
},
{
    id: '34',
    title: 'מגבונים',
},
{
    id: '35',
    title: 'אחר',
}
];

const TREATMENTS_DATA = [{
    id: '41',
    title: 'פיזיותרפיה',
},
{
    id: '42',
    title: 'קלינאית תקשורת',
},
{
    id: '43',
    title: 'ריפוי בעיסוק',
},
{
    id: '44',
    title: 'טיפול רגשי',
}
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <Pressable onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </Pressable>
);

const ReportSubCategory = ({ route, navigation }) => {

    const getData = () => {
        let categoryId = route.params.itemId;
        switch (categoryId) {
            case "1":
                return ACTIVITIES_DATA;
            case "2":
                return MEALS_DATA;
            case "3":
                return REQUEST_DATA;
            case "4":
                return TREATMENTS_DATA;
        }
    }
    const getSubCategoriesData = () => {
        let data = getData();
        let subCategories = [];
        if (data) {
            for (let i = 0; i < data.length; i++) {
                subCategories.push({
                    id: data[i].id,
                    selected: false,
                    title: data[i].title,
                });
            }
        }
        return subCategories;
    }

    const refData = React.useRef<any>(null);
    const [subCategoriesData, setSubCategoriesData] = useState([]);

    React.useEffect(() => {
        if (!refData.current) {
            refData.current = getSubCategoriesData();
            setSubCategoriesData(refData.current)
        }
    }, [])

    const isMultiSelectSubCategory = () => {
        let categoryId = route.params.itemId;
        //בבקשה לשלוח
        return (categoryId == 3);
    }
    const [modalVisible, setModalVisible] = useState(false);
    const toggleSelected = (item: any) => {
        if (!isMultiSelectSubCategory()) {
            for (let i = 0; i < subCategoriesData.length; i++) {
                subCategoriesData[i].selected = false;
            }
        }
        if (item) {
            item.selected = !item.selected;
            setSubCategoriesData([...subCategoriesData])
        }
    };
    const isSelected = () => {
        for (let i = 0; i < subCategoriesData.length; i++) {
            if (subCategoriesData[i].selected) {
                return true;
            }
        }
        return false;
    }
    const getSelectedData = () => {
        let selected = {};
        let multiSelected = [];
        for (let i = 0; i < subCategoriesData.length; i++) {
            if (subCategoriesData[i].selected) {
                if (isMultiSelectSubCategory()) {
                    if (subCategoriesData[i].id == 35) {

                    }
                    else {
                        multiSelected.push(subCategoriesData[i].title);
                    }

                }
                else {
                    selected = { "id": subCategoriesData[i].id, "title": subCategoriesData[i].title };
                    break;
                }
            }
        }

        if (isMultiSelectSubCategory()) {
            selected = { "id": 0, "title": multiSelected.toString() };
        }
        return selected;
    }
    const renderItem = ({ item }) => {
        const backgroundColor = item.selected ? "#804ED9" : "#F0E8FF";
        const color = item.selected ? '#FFFFFF' : '#804ED9';

        return (
            <Item
                item={item}
                onPress={() => { toggleSelected(item); }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
    const otherRequestSelected = () => {
        let other = subCategoriesData.find((data) => data.id == 35);
        if (other) {
            return other.selected;
        }
        return false;
    }
    const addMessage = () => {

        let categoryId = route.params.itemId;
        let selectedData = getSelectedData();
        if (isMultiSelectSubCategory() && !otherRequestSelected()) {
            sendMessage(selectedData.title);
        }
        else {
            setModalVisible(true);
        }
    }

    const sendMessage = (message: string) => {

        let categoryId = route.params.itemId;
        let selectedData = getSelectedData();
        //send message
        if (otherRequestSelected()) {
            message = selectedData.title + "," + message;
        }
        //alert("id: " + selectedData.id + " message: " + message)
    }

    const [messageText, setText] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textClose}>X</Text>
                        </Pressable>
                        <Text style={styles.modalText}>{getSelectedData().title}</Text>
                        <TextInput multiline={true} numberOfLines={4} onChangeText={messageText => setText(messageText)} />
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => { sendMessage(messageText); setModalVisible(!modalVisible) }}
                        >
                            <Text style={styles.textClose}>שלח</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <FlatList
                data={subCategoriesData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <Pressable disabled={!isSelected()} style={isSelected() ? styles.buttonUpdate : styles.buttonUpdateDisabled} onPress={() => { addMessage(); }}>
                <Text style={styles.textUpdate}>בחר</Text>
            </Pressable>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#FFFFFF"
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 32,
        borderRadius: 20,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.25,
        shadowRadius: 40,
    },
    title: {
        fontSize: 20,
    },
    buttonUpdate: {
        backgroundColor: "#A683E4",
        width: 104,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        marginVertical: 8,
        marginHorizontal: 16,

    },
    textUpdate: {
        color: "#FFFFFF",

    },
    buttonUpdateDisabled: {
        display: 'none'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 120
    },
    modalView: {
        margin: 0,
        backgroundColor: "#F6F6F6",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "100%"
    },
    buttonClose: {
        margin: 20
    },
    textClose: {
        textAlign: "right",
        color: "#3A3A35",
        fontSize: 20
    },
    textStyle: {
        color: "#3A3A35",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold"
    },
});

export default ReportSubCategory;