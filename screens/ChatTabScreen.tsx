import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { GiftedChat, Message } from 'react-native-gifted-chat';
import {CustomMessage} from '../components/message';
import {mockMessages} from '../mock/mock-messages'
import AppLayout from "../components/AppLayout";
import useUserRole from "../hooks/useUserRoles";

export default function ChatTabScreen({ route, navigation }) {

      const [messages, setMessages] = React.useState([]);
      const user = useUserRole();

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

      const customRenderMessage = ((message: Message) => {
        return CustomMessage(message)
      })

      const onSend = React.useCallback((messages = []) => {
          console.log(messages)
          setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        }, [])

  return (
    <AppLayout navigation={navigation} title="דיווח יומי">
      <View style={styles.container}>
        <Text style={styles.childName}>{route.params.data.name}</Text>
        <GiftedChat messages={messages} onSend={messages => onSend(messages)} user={{_id: 1}} renderMessage={message => customRenderMessage(message)} />
      </View>
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
  }
});
