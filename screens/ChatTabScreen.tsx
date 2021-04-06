import * as React from 'react';
import { Modal, Pressable, StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { GiftedChat, Message, InputToolbar } from 'react-native-gifted-chat';
import { CustomMessage } from '../components/message';
import { mockMessages } from '../mock/mock-messages'
import AppLayout from "../components/AppLayout";
import useUserRole from "../hooks/useUserRoles";
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function ChatTabScreen({ route, navigation }) {

  const [messages, setMessages] = React.useState([]);
  const user = useUserRole();
  const isParent = user?.role === "parent";

  const messagesFromServer = mockMessages.map(message => {
    return {
      _id: message.recordId,
      text: message.value,
      title: message.category,
      user: {
        name: message.sender
      },
      createdAt: new Date(message.timestamp)
    }
  }).sort((m1, m2) => m1.createdAt > m2.createdAt ? -1 : m1.createdAt === m2.createdAt ? 0 : 1);

  React.useEffect(() => {
    setMessages(messagesFromServer)
  }, [])

  const customtInputToolbar = props => {
    if(!isParent) {
      return (<Pressable style={styles.reportButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.reportButtonText}>התחל דיווח</Text>
      </Pressable>);
    }
    return (
      <InputToolbar
        {...props}
      />
    );
  };

  const customRenderMessage = ((message: Message) => {
    return CustomMessage(message, isParent)
  })

  const onSend = React.useCallback((messages = []) => {
    console.log(messages)
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const [modalVisible, setModalVisible] = useState(false);
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

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => { setModalVisible(false); navigation.navigate("ReportSubCategory", { itemId: item.id, childData: route.params.data }); }}
      />
    );
  };

  return (
    <AppLayout navigation={navigation} title="דיווח יומי">
      <View style={styles.container}>
        <Text style={styles.childName}>{route?.params?.data?.name}</Text>
        <GiftedChat messages={messages} 
        onSend={messages => onSend(messages)} 
        user={{ _id: 1 }} 
        renderMessage={message => customRenderMessage(message)} 
        renderInputToolbar={props => customtInputToolbar(props)}
        />
      </View>
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
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  childName: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold"
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
  buttonClose: {
    margin: 15
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
  reportButton: {
    borderRadius: 16,
    padding: 10,
    backgroundColor: "#804ED9",
    width: 160,
    height: 40,
    alignItems: "center",
    alignSelf: "center"
  },
  reportButtonText: {
    color: "white"
  }
});
