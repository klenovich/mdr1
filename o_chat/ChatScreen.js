import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { fetchMessage, addMessage } from './database';
import Message from './models/message';

const ChatScreen = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessage().then((messages) => {
      let msgs = messages.map(msg => new Message(msg.id, msg.sender, msg.text, msg.timestamp));
      setMessages(msgs);
    });
  }, []);

  const sendMsg = () => {
    const msg = new Message(0, 'User', text, new Date().toString());
    addMessage(msg);
    setText('');
    fetchMessage().then((messages) => {
      let msgs = messages.map(msg => new Message(msg.id, msg.sender, msg.text, msg.timestamp));
      setMessages(msgs);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.timestamp}>{`${item.timestamp}: ${item.sender}`}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type your message"
        style={styles.input}
      />
      <TouchableOpacity onPress={sendMsg} style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
};

export default ChatScreen;