import React, {useEffect} from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback, View, Alert} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import defaultStyles from '../config/styles';


const ImageInput = ({imageUri, onChangeImage}) => {
    
    const requestPermission = async() => {
        const {granted, status} = await ImagePicker.requestCameraPermissionsAsync();
        console.log(granted, status)
        !granted && alert('you need to enable permission to access the library');
    
      }
      
      useEffect(() => {
        requestPermission();
      },[]);

      const handlePress = () => {
          !imageUri ? selectImage() : Alert.alert('Delete', 'Are you sure you want to delete this image?', [
              {text : 'yes', onPress: () => onChangeImage(null)},
              {text: 'no'}
          ])
      }

      const selectImage = async () => {
          try {
              const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  quality: 0.5,
              });
              if(!result.cancelled) onChangeImage(result.uri)
          } catch (error) {
            console.log(error);
          }
      }

 return (
    <TouchableWithoutFeedback onPress={handlePress}>
       
        <View  style={styles.Container} >
            {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={defaultStyles.colors.medium}/>}
            {imageUri && <Image source={{uri: imageUri}} style={styles.Image}/>}
        </View>
   
    </TouchableWithoutFeedback>
 )
}
export default ImageInput;

const styles = StyleSheet.create({
 Container: {
    backgroundColor: defaultStyles.colors.light,
    height:  100,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
 },
 Image: {
     height: '100%',
     width: '100%'
 }
});