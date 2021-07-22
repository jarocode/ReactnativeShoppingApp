import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import {useNetInfo} from '@react-native-community/netinfo'

import colors from '../config/colors';
import AppText from './AppText';

const OfflineNotice = () => {
 const netInfo = useNetInfo();
 console.log(netInfo);
 if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
 return (
   <View style={styles.Container}>
       <AppText style={styles.text}>No internet Connection</AppText>
   </View>
 );

 return null;
}
export default OfflineNotice;

const styles = StyleSheet.create({
 Container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width:'100%',
    top: Constants.statusBarHeight,
    position: 'absolute',
    zIndex: 2
 },
 text: {
     color: colors.white
 }
});