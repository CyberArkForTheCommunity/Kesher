import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { GiftedChat, Message } from 'react-native-gifted-chat';
import {CustomMessage} from '../components/message';
import {mockMessages} from '../mock/mock-messages'

export default function ChatTabScreen() {

      const [messages, setMessages] = React.useState([]);

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
    <View style={styles.container}>
      <Text style={styles.title}>Chat Tab</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <GiftedChat messages={messages} onSend={messages => onSend(messages)} user={{_id: 1}} renderMessage={message => customRenderMessage(message)} />
    </View>
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
});
