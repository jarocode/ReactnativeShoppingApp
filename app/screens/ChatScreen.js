import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MessageLabel from '../components/MessageLabel';
import Screen from '../components/Screen';
import colors from '../config/colors';

const ChatScreen = () => {
 return (
   <Screen style={styles.screen}>
     <View style={styles.container}>
      <MessageLabel alignItems="flex-start"/>
      <MessageLabel alignItems="flex-end"/>
   </View>
   </Screen>
 )
}
export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 30
  },
  screen: {
      backgroundColor: colors.light
  }
});