import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, FlatList } from "react-native";
import Navigation from "../navigation";

const DATA = [
  {
    id: '1',
    title: 'פעילויות שהתקיימו בגן',
    imgUrl: require('../assets/images/report_activities.png')
  },
  {
    id: '2',
    title: 'ארוחות',
    imgUrl: require('../assets/images/report_meals.png')
  },
  {
    id: '3',
    title: 'בבקשה לשלוח',
    imgUrl: require('../assets/images/report_send.png')
  },
  {
    id: '4',
    title: 'טיפולי מקצועות הבריאות',
    imgUrl: require('../assets/images/report_treatments.png')
  },
];

const Item = ({ item, onPress }) => (
  <Pressable
    style={[styles.button]}
    onPress={onPress}
  >
    <Image source={item.imgUrl} style={styles.categoryPic} ></Image>
    <Text style={styles.textStyle}>{item.title}</Text>
  </Pressable >
);

const ReportChat = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => { setModalVisible(false); navigation.navigate("ReportSubCategory", { itemId: item.id }); }}
      />
    );
  };
  return (
    <View style={styles.centeredView}>
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
            <Text style={styles.modalText}>בחר דיווח</Text>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              numColumns={2}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>התחל דיווח</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  categoryPic: {
    height: 120,
    marginBottom: 5
  },
  button: {
    borderRadius: 16,
    padding: 10,
    elevation: 2,
    margin: 15,
    backgroundColor: "#FFFFFF",
    width: 160,
    height: 180,
    alignItems: "center"
  },
  buttonOpen: {
    width: 100,
    borderRadius: 16,
    backgroundColor: "#A683E4",
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

export default ReportChat;