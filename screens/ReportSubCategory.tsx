import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Pressable } from 'react-native';

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
    title: 'ארוחק בוקר',
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
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const ReportSubCategory = ({ route, navigation }) => {
    const [selectedId, setSelectedId] = useState(null);
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
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#804ED9" : "#F0E8FF";
        const color = item.id === selectedId ? '#FFFFFF' : '#804ED9';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={getData()}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
            <Pressable disabled={!{ selectedId }.selectedId} style={{ selectedId }.selectedId ? styles.buttonUpdate : styles.buttonUpdateDisabled} onPress={() => { navigation.navigate("ReportScreen", { items: { selectedId }.selectedId }) }}>
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
    }
});

export default ReportSubCategory;