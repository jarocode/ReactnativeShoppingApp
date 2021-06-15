import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultStyles from '../config/styles';


const ImageInput = ({imageUri, onChangeImage}) => {
 return (
    <TouchableOpacity onPress={onChangeImage}>
       
        <ImageBackground  source={{uri: imageUri}} style={styles.Container}>
            {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={defaultStyles.colors.medium}/>}
        </ImageBackground>
   
    </TouchableOpacity>
 )
}
export default ImageInput;

const styles = StyleSheet.create({
 Container: {
    backgroundColor: defaultStyles.colors.light,
    height:  100,
    width: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
 }
});