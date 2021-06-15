import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ImageInput from './ImageInput';

const ImageInputList = ({imageUris, onAddImage, onRemoveImage}) => {
 return (
   <View style={styles.Container}>
       <FlatList
            data={imageUris}
            numColumns= {3}
            keyExtractor={imageUri => imageUri.toString()}
            renderItem = {({imageUri}) => {
                console.log(imageUri);
               return  <ImageInput
                    imageUri={imageUri}
                    onChangeImage = {onAddImage}
                />}

            }
        />
   </View>
 )
}
export default ImageInputList;

const styles = StyleSheet.create({
 Container: {

 }
});