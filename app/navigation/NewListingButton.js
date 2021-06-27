import React from 'react';
import { StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NewListingButton = ({onPress}) => {
 return (
   <TouchableOpacity onPress={onPress}>
        <View style={styles.Container}>
            <MaterialCommunityIcons 
                name="plus-circle" 
                color={colors.white} 
                size={40}
            />
        </View>
   </TouchableOpacity>
 )
}
export default NewListingButton;

const styles = StyleSheet.create({
 Container: {
    backgroundColor: colors.primary,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 25,
    borderColor: colors.white,
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center'
 }
});