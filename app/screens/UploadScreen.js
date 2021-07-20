import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';

const UploadScreen = ({progress = 0, visible = false}) => {
 return (
   <Modal visible={visible}>
       <View style={styles.Container}>
           <AppText>{progress * 100}%</AppText>
       </View>
   </Modal>
 )
}
export default UploadScreen;

const styles = StyleSheet.create({
 Container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
 }
});