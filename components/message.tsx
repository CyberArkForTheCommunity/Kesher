import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Message } from 'react-native-gifted-chat'
import { Text, View } from '../components/Themed';

export function CustomMessage(message: Message) {
  let title;
  const isMe = !!message.currentMessage.user.name;
  const styles = StyleSheet.create({
    textMessageContainer: {
      direction: 'rtl',
      padding: 11,
      borderColor: isMe ? '#F0E8FF' : '#804ED9',
      borderWidth: 1,
      borderRadius: 16,
      margin: 20,
      marginBottom: 10,
      marginTop: 0,
      fontSize: 16,
      lineHeight: 18,
      backgroundColor: isMe ? '#F0E8FF' : '#B097DC',
      shadowColor: 'rgba(0,0,0,0.15)',
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowOpacity: 2,
      shadowRadius: 2
      },
      textMessageTitle: {
        color: '#804ED9',
        fontWeight: '600'
      },
      detailsContainer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent:'space-between',
        backgroundColor: 'transparent',
        marginTop: 5
      },
      name: {
        color: 'rgba(58, 58, 53, 0.5)',
        flex: 1
      },
      time: {
        color: 'rgba(58, 58, 53, 0.5)',
        flex: 2,
        direction: 'ltr'
      }
  });

  if(message.currentMessage.title) {
    title = <Text style={styles.textMessageTitle}>{message.currentMessage.title}</Text>;
  }

  return (
    <View style={styles.textMessageContainer}>
      {title}
      <Text style={styles.textMessage}>{message.currentMessage.text}</Text>
      <View style={styles.detailsContainer}>
      <Text style={styles.name}>{message.currentMessage.user.name}</Text>
      <Text style={styles.time}>{message.currentMessage.createdAt.toLocaleString()}</Text>
      </View>
    </View>
  );
}
