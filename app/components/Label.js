import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const Label = ({size, backgroundColor,name, onPress}) => {
 return (
   <TouchableOpacity style={styles.Container} onPress={onPress}>
       <Icon size={size} backgroundColor={backgroundColor} name={name}/>
   </TouchableOpacity>
 )
}
export default Label;

const styles = StyleSheet.create({
 Container: {

 }
});