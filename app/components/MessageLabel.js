import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

const MessageLabel = ({alignItems}) => {
 return (
   <View style={[styles.container, {alignItems : alignItems}]}>
     <View style={styles.chat}>
        <AppText style={styles.text}>hello uchman!</AppText>
     </View>
     <AppText style={styles.time}>06:34pm</AppText>
   </View>
 )
}
export default MessageLabel;

const styles = StyleSheet.create({
    container: {
        minWidth: 20,
        marginBottom: 40
       },
    chat: {
        minHeight: 50,
        width: 200,
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        padding: 10
    },
    text: {
        color: colors.white,
        textAlign: 'center'
    },
    time: {
      color: colors.medium,
      marginVertical: 5,
      fontSize: 16
    }
});