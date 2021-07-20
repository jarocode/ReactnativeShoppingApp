import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';

import AppText from '../components/AppText';
import colors from '../config/colors';

const UploadScreen = ({progress = 0, visible = false}) => {
 return (
   <Modal visible={visible}>
       <View style={styles.Container}>
           <Progress.Bar color={colors.primary} progress={progress} width={200}/>
           
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